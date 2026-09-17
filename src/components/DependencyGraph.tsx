import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  type Edge,
  type Node,
  type NodeMouseHandler,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import dagre from "@dagrejs/dagre";
import { useEffect, useMemo, useState } from "react";

type GraphNode = {
  id: string;
  label: string;
  path: string;
  language: string;
};

type GraphEdge = {
  source: string;
  target: string;
  type: string;
};

type DependencyGraphData = {
  version: number;
  gitCommit: string;
  generatedAt: string;
  nodes: GraphNode[];
  edges: GraphEdge[];
};

type DependencyNodeData = {
  graphNode: GraphNode;
  label: React.ReactNode;
};

const NODE_WIDTH = 190;
const NODE_HEIGHT = 64;

function createLayout(
  nodes: GraphNode[],
  edges: GraphEdge[],
) {
  const graph = new dagre.graphlib.Graph();

  graph.setDefaultEdgeLabel(() => ({}));

  graph.setGraph({
    rankdir: "TB",
    ranksep: 100,
    nodesep: 50,
  });

  nodes.forEach((node) => {
    graph.setNode(node.id, {
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
    });
  });

  edges.forEach((edge) => {
    graph.setEdge(edge.source, edge.target);
  });

  dagre.layout(graph);

  const flowNodes: Node<DependencyNodeData>[] = nodes.map((node) => {
    const position = graph.node(node.id);

    return {
      id: node.id,

      position: {
        x: position.x - NODE_WIDTH / 2,
        y: position.y - NODE_HEIGHT / 2,
      },

      data: {
        graphNode: node,
        label: (
            <div className="dependency-node">
            <div className="dependency-node-language">
                {node.language}
            </div>

            <div className="dependency-node-label">
                {node.label}
            </div>
            </div>
        ),
      },

      style: {
        width: NODE_WIDTH,
        height: NODE_HEIGHT,
      },
    };
  });

  const flowEdges: Edge[] = edges.map((edge, index) => ({
    id: `edge-${index}`,
    source: edge.source,
    target: edge.target,

    style: {
      strokeWidth: 1,
    },
  }));

  return {
    nodes: flowNodes,
    edges: flowEdges,
  };
}

function DependencyGraph() {
  const [graphData, setGraphData] =
    useState<DependencyGraphData | null>(null);

  const [selectedNode, setSelectedNode] =
    useState<GraphNode | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    async function loadGraph() {
      try {
        setLoading(true);

        const response = await fetch(
          `${import.meta.env.BASE_URL}data/dependency-graph.json`,
        );

        if (!response.ok) {
          throw new Error(
            `Failed to load dependency graph (${response.status})`,
          );
        }

        const data =
          (await response.json()) as DependencyGraphData;

        setGraphData(data);
      } catch (error) {
        console.error(error);

        setError(
          "Dependency graph를 불러오지 못했습니다.",
        );
      } finally {
        setLoading(false);
      }
    }

    loadGraph();
  }, []);

  const layout = useMemo(() => {
    if (!graphData) {
      return {
        nodes: [],
        edges: [],
      };
    }

    return createLayout(
      graphData.nodes,
      graphData.edges,
    );
  }, [graphData]);

  const highlightedNodeIds = useMemo(() => {
    if (!selectedNode || !graphData) {
        return new Set<string>();
    }

    const ids = new Set<string>([selectedNode.id]);

    graphData.edges.forEach((edge) => {
        if (edge.source === selectedNode.id) {
        ids.add(edge.target);
        }

        if (edge.target === selectedNode.id) {
        ids.add(edge.source);
        }
    });

    return ids;
  }, [selectedNode, graphData]);

  const highlightedNodes = useMemo(() => {
    return layout.nodes.map((node) => {
        const isSelected = node.id === selectedNode?.id;
        const isConnected = highlightedNodeIds.has(node.id);

        return {
        ...node,
        style: {
            ...node.style,
            opacity: selectedNode ? (isConnected ? 1 : 0.3) : 1,
            border: isSelected
            ? "1px solid #4da3ff"
            : undefined,
            boxShadow: isSelected
            ? "0 0 0 1px rgba(77, 163, 255, 0.2)"
            : undefined,
        },
        };
    });
  }, [layout.nodes, selectedNode, highlightedNodeIds]);

  const highlightedEdges = useMemo(() => {
    if (!selectedNode) {
        return layout.edges;
    }

    return layout.edges.map((edge) => {
        const isConnected =
        edge.source === selectedNode.id ||
        edge.target === selectedNode.id;

        return {
        ...edge,
        style: {
            ...edge.style,
            stroke: isConnected ? "#4da3ff" : "#29313d",
            strokeWidth: isConnected ? 2 : 1,
            opacity: isConnected ? 1 : 0.2,
        },
        };
    });
  }, [layout.edges, selectedNode]);

  const handleNodeClick: NodeMouseHandler = (
    _event,
    node,
  ) => {
    const graphNode = graphData?.nodes.find(
      (item) => item.id === node.id,
    );

    if (graphNode) {
      setSelectedNode(graphNode);
    }
  };

  if (loading) {
    return (
      <div className="dependency-graph-wrapper dependency-graph-state">
        <span>Loading dependency graph...</span>
      </div>
    );
  }

  if (error || !graphData) {
    return (
      <div className="dependency-graph-wrapper dependency-graph-state">
        <span>{error}</span>
      </div>
    );
  }

  const imports = graphData.edges
    .filter(
      (edge) => edge.source === selectedNode?.id,
    )
    .map((edge) =>
      graphData.nodes.find(
        (node) => node.id === edge.target,
      ),
    )
    .filter(Boolean) as GraphNode[];

  const importedBy = graphData.edges
    .filter(
      (edge) => edge.target === selectedNode?.id,
    )
    .map((edge) =>
      graphData.nodes.find(
        (node) => node.id === edge.source,
      ),
    )
    .filter(Boolean) as GraphNode[];

  return (
    <div className="dependency-graph-wrapper">
      <ReactFlow
        nodes={highlightedNodes}
        edges={highlightedEdges}
        fitView
        fitViewOptions={{
          padding: 0.2,
        }}
        onNodeClick={handleNodeClick}
        onPaneClick={() => setSelectedNode(null)}
        nodesDraggable
        nodesConnectable={false}
        elementsSelectable
        zoomOnScroll
        panOnScroll
      >
        <Background
          gap={20}
          size={1}
        />

        <Controls
          showInteractive={false}
        />

        <MiniMap
          pannable
          zoomable
        />
      </ReactFlow>

      {selectedNode && (
        <div className="dependency-detail-panel">
          <button
            className="dependency-detail-close"
            onClick={() =>
              setSelectedNode(null)
            }
            aria-label="Close"
          >
            ×
          </button>

          <div className="dependency-detail-language">
            {selectedNode.language}
          </div>

          <h3>
            {selectedNode.label}
          </h3>

          <p className="dependency-detail-path">
            {selectedNode.path}
          </p>

          <div className="dependency-detail-section">
            <div className="dependency-detail-label">
              IMPORTS
              <span>{imports.length}</span>
            </div>

            {imports.length > 0 ? (
              <ul>
                {imports.map((node) => (
                  <li key={node.id}>
                    {node.label}
                  </li>
                ))}
              </ul>
            ) : (
              <p>None</p>
            )}
          </div>

          <div className="dependency-detail-section">
            <div className="dependency-detail-label">
              IMPORTED BY
              <span>{importedBy.length}</span>
            </div>

            {importedBy.length > 0 ? (
              <ul>
                {importedBy.map((node) => (
                  <li key={node.id}>
                    {node.label}
                  </li>
                ))}
              </ul>
            ) : (
              <p>None</p>
            )}
          </div>
        </div>
      )}

      <div className="dependency-graph-stats">
        <span>
          {graphData.nodes.length} NODES
        </span>

        <span>
          {graphData.edges.length} RELATIONSHIPS
        </span>
      </div>
    </div>
  );
}

export default DependencyGraph;