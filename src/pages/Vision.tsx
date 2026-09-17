import Navbar from "../components/Navbar";
import DependencyGraph from "../components/DependencyGraph";

function Vision() {
  return (
    <>
      <Navbar />

      <main className="project-page">

        {/* Hero */}
        <section className="project-hero">
          <p className="eyebrow">한컴AI아카데미 5기 · 2026</p>

          <h1>VISION</h1>

          <p className="project-subtitle">
            AI Code Assistant
          </p>

          <p className="project-description">
            신입 개발자의 온보딩을 돕는 AI 코드 어시스턴트
          </p>

          <div className="project-meta">
            <div>
              <span>TEAM</span>
              <strong>4 Developers</strong>
            </div>

            <div>
              <span>TYPE</span>
              <strong>VS Code Extension</strong>
            </div>

            <div>
              <span>ROLE</span>
              <strong>Frontend Developer</strong>
            </div>

            <div>
              <span>STATUS</span>
              <strong>Completed</strong>
            </div>
          </div>
        </section>


        {/* Overview */}
        <section className="case-section">
          <div className="section-number">01</div>

          <div className="case-content">
            <p className="eyebrow">OVERVIEW</p>

            <h2>
              코드의 구조와 맥락을 
              <br />
              빠르게 이해
            </h2>

            <p>
              Vision은 신입 개발자가 프로젝트의 구조와 기능을 빠르게 이해할 수 있도록 도와주는 
              <br />
              VSCode Extension 형태의 AI 코드 어시스턴트입니다.
            </p>

            <p>
              코드 생성을 주로 하는 기존의 코딩 어시스턴트와 달리, 
              <br />
              Vision은 개발자가 코드를 이해하는 것에 중점을 둡니다.
            </p>
          </div>
        </section>


        {/* Motivation */}
        <section className="case-section">
          <div className="section-number">02</div>

          <div className="case-content">
            <p className="eyebrow">MOTIVATION</p>

            <h2>
              코드를 빠르게 이해하는 것은 
              <br />
              어렵습니다.
            </h2>

            <p>
              기존 프로젝트에 합류한 신입 개발자가 처음 마주하는 도전은 
              <br />
              코드를 작성하는 것이 아니라, 시스템을 이해하는 것입니다.
            </p>

            <div className="problem-grid">
              <div className="problem-card">
                <span>01</span>
                <h3>Project Structure</h3>
                <p>
                  대규모 프로젝트에서 주요 컴포넌트가 어디에 있고 어떻게 연결되어 있는지 파악하기 어렵습니다.
                </p>
              </div>

              <div className="problem-card">
                <span>02</span>
                <h3>Feature Entry Points</h3>
                <p>
                  특정 기능이 실제로 어디에서 시작되는지 파악하기 어렵습니다.
                </p>
              </div>

              <div className="problem-card">
                <span>03</span>
                <h3>Development Context</h3>
                <p>
                  코드가 왜 이러한 방식으로 설계되고 구현되었는지 이해하기 어렵습니다.
                </p>
              </div>

              <div className="problem-card">
                <span>04</span>
                <h3>Existing Knowledge</h3>
                <p>
                  관련 문서와 개발 규칙이 어디에 있는지 찾기 어렵습니다.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Solution */}
        <section className="case-section">
          <div className="section-number">03</div>

          <div className="case-content">
            <p className="eyebrow">SOLUTION</p>

            <h2>
              코딩에 앞서,
              <br />
              프로젝트를 이해하도록
            </h2>

            <p>
              Vision은 방대한 프로젝트 코드와 문서를 통합하고,
              <br />
              사용자가 이를 직관적으로 이해할 수 있도록 돕습니다. 
            </p>

            <div className="solution-diagram">
              <div>
                <span>❔</span>
                <strong>Problem</strong>
                <p>방대한 프로젝트를 이해하려면 맨땅에 헤딩하는 수밖에 없습니다.</p>
              </div>

              <div>
                <span>🛠️</span>
                <strong>Solution</strong>
                <p>프로젝트 구조와 기능을 직관적으로 이해할 수 있는 그래프와 채팅 기능을 제공합니다.</p>
              </div>

              <div>
                <span>💡</span>
                <strong>Effect</strong>
                <p>프로젝트를 이해하는 데 소요되는 시간과 자원을 크게 줄이고, 개발 효율성을 높입니다.</p>
              </div>

            </div>
          </div>
        </section>


        {/* Features */}
        <section className="case-section">
          <div className="section-number">04</div>

          <div className="case-content">
            <p className="eyebrow">KEY FEATURES</p>

            <h2>
              Vision의 핵심 기능
            </h2>

            <div className="feature-list">

              <article className="feature-item">
                <span>01</span>

                <div>
                  <h3>Code & Document RAG</h3>
                  <p>
                    소스 코드와 개발 문서를 함께 검색하여 AI에 관련 컨텍스트를 제공합니다.
                  </p>
                </div>
              </article>

              <article className="feature-item">
                <span>02</span>

                <div>
                  <h3>AI Chat Assistant</h3>
                  <p>
                    프로젝트에 대해 질문하고, 사용 가능한 프로젝트 컨텍스트를 기반으로 답변을 받습니다.
                  </p>
                </div>
              </article>

              <article className="feature-item">
                <span>03</span>

                <div>
                  <h3>Dependency Graph</h3>
                  <p>
                    소스 파일 간의 관계를 시각화하고, 익숙하지 않은 프로젝트의 구조를 탐색합니다.
                  </p>
                </div>
              </article>

              <article className="feature-item">
                <span>04</span>

                <div>
                  <h3>Project Briefing</h3>
                  <p>
                    프로젝트의 구조, 코드, 문서, 개발 컨텍스트를 요약한 Briefing 문서를 제공합니다.
                  </p>
                </div>
              </article>

            </div>
          </div>
        </section>


        {/* Tech Stack */}
        <section className="case-section">
          <div className="section-number">05</div>

          <div className="case-content">
            <p className="eyebrow">TECHNOLOGY</p>

            <h2>
              Built with modern
              <br />
              developer technologies.
            </h2>

            <div className="tech-grid">
              <span>TypeScript</span>
              <span>VS Code Extension API</span>
              <span>React</span>
              <span>React Flow</span>
              <span>Dagre</span>
              <span>REST API</span>
              <span>SSE</span>
              <span>RAG</span>
              <span>Ollama</span>
              <span>SQLite</span>
              <span>Python</span>
              <span>Python HTTP Library</span>
              <span>Git</span>
            </div>
          </div>
        </section>

        {/* Entire Architecture */}
        <section className="case-section architecture-section">
          <div className="section-number">06</div>

          <div className="case-content">
            <p className="eyebrow">ARCHITECTURE</p>

            <h2>
              Vision Architecture
            </h2>

            <p>
              VScode 확장과 AI 백엔드로 구성되어 있습니다.
              <br />
              각 계층은 명확하게 정의된 인터페이스를 통해 통신하면서 집중된 책임을 가지고 있습니다.
            </p>

            <div className="architecture-image">
              <p>▼ Frontend ↔ Backend 통합 Architecture</p>
              <img
                src="/images/vision/architecture.png"
                alt="Vision architecture"
              />
            </div>


            {/* Architecture layers */}
            <div className="architecture-layers">

              <article className="architecture-layer">
                <div className="architecture-layer-number">
                  Frontend
                </div>
    
                <div>
                  <h3>Vision Assistant</h3>

                  <p>
                    Sidebar, Dependency Graph, 그리고 Chat 기능의 구현을 담당합니다. 
                  </p>

                  <div className="architecture-tags">
                    <span>TypeScript</span>
                    <span>VS Code API</span>
                    <span>Chat Participant</span>
                    <span>React</span>
                    <span>React Flow</span>
                    <span>Dagre</span>
                    <span>VSCode Git Extension API</span>
                  </div>
                </div>
              </article>


              <article className="architecture-layer">
                <div className="architecture-layer-number">
                  Backend
                </div>

                <div>
                  <h3>VSS Server</h3>

                  <p>
                    Chat 요청을 처리하고, 관련 프로젝트 컨텍스트를 검색하며, 검색된 정보를 언어 모델과 연결하는 역할을 담당합니다.
                  </p>

                  <div className="architecture-tags">
                    <span>AWS</span>
                    <span>REST API</span>
                    <span>SSE Streaming</span>
                    <span>RAG</span>
                    <span>LLM</span>
                    <span>pgvector</span>
                    <span>ollama</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>


        {/* Frontend Architecture */}
        <section className="case-section architecture-section">
          <div className="section-number">07</div>

          <div className="case-content">
            <p className="eyebrow">FRONTEND ARCHITECTURE</p>

            <h2>
              Vision Assistant
            </h2>

            <p>
              Vision의 프론트엔드 아키텍처는 VS Code 확장 내에서 사용자 인터페이스와 상호작용하며, 백엔드와의 통신을 통해 데이터를 처리합니다.
            </p>


            {/* Architecture layers */}
            <div className="architecture-layers">

              <article className="architecture-layer">
                <div className="architecture-layer-number">
                  01
                </div>
    
                <div>
                  <h3>Vision Assistant Sidebar</h3>

                  <p>
                    Vision Assistant Sidebar는 VS Code 확장 내 격리된 환경에서 동작하는 vanilla JavaScript 기반의 사용자 인터페이스입니다. Server 정보 표시의 창구이자 명령 입력의 진입점입니다. 
                  </p>

                  <h5>Sidebar 기능</h5>
                  <p>
                    <ul>
                      <li>Server 정보 표시</li>
                      <li>Local Project 정보 표시</li>
                      <li>Dependency Graph 출력</li>
                      <li>Project Briefing 출력</li>
                      <li>Project Indexing 명령</li>
                    </ul>
                  </p>

                  <div className="architecture-image">
                    <p>▼ Frontend Architecture</p>
                    <img
                      src="/images/vision/sidebar-architecture.png"
                      alt="Vision architecture"
                    />
                  </div>

                  <div className="architecture-tags">
                    <span>Vanilla JS</span>
                    <span>HTML + CSS</span>
                    <span>VS Code API</span>
                    <span>TypeScript</span>
                  </div>
                </div>
              </article>


              <article className="architecture-layer">
                <div className="architecture-layer-number">
                  02
                </div>

                <div>
                  <h3>Chat Participant & Streaming</h3>

                  <p>
                    VSCode Extension API Guide를 따라 Chat Participant ─ @vision 을 등록하고 SSE를 통해 실시간으로 메시지를 스트리밍합니다.
                  </p>

                  <div className="architecture-image">
                    <p>▼ Chat SSE Flowchart</p>
                    <img
                      src="/images/vision/chat-flowchart.png"
                      alt="Chat SSE Flowchart"
                    />
                  </div>

                  <div className="architecture-tags">
                    <span>Chat Participant</span>
                    <span>SSE Streaming</span>
                  </div>
                </div>
              </article>

              <article className="architecture-layer">
                <div className="architecture-layer-number">
                  03
                </div>

                <div>
                  <h3>Dependency Graph</h3>

                  <p>
                    의존성 그래프는 프로젝트 내 모듈 간의 import 관계를 시각화하여 개발자가 코드 구조를 이해하는 데 도움을 줍니다. 
                    VSCode 내장 Symbol 검색과 Import 구문 검색으로 의존성 정보를 수집하고, React 기반의 Graph Viewer를 통해 시각적으로 탐색할 수 있습니다.
                  </p>

                  <div className="architecture-image">
                    <p>▼ Dependency Graph 생성 과정</p>
                    <img
                      src="/images/vision/dependency-graph.png"
                      alt="Dependency Graph"
                    />
                  </div>

                  <div className="architecture-tags">
                    <span>VSCode Symbol Search</span>
                    <span>Import Statement Search</span>
                    <span>Dependency Graph</span>
                    <span>React</span>
                    <span>React Flow</span>
                    <span>Dagre</span>
                  </div>
                </div>
              </article>
            </div>


            {/* Communication */}
            <div className="architecture-detail">

              <div className="architecture-detail-header">
                <p className="eyebrow">COMMUNICATION</p>

                <h3>
                  Extension 내 Webview 통신
                </h3>
              </div>

              <div className="communication-flow">

                <div className="flow-node">
                  <span>Sidebar</span>
                  <strong>JavaScript</strong>
                </div>

                <div className="flow-line">
                  Webview Message
                  <br />
                  (command + data)
                </div>

                <div className="flow-node">
                  <span>Extension</span>
                  <strong>TypeScript</strong>
                </div>

                <div className="flow-line">
                  Webview Message
                  <br />
                  (JSON graph)
                </div>

                <div className="flow-node">
                  <span>Graph Viewer</span>
                  <strong>React</strong>
                </div>

              </div>

              <p className="architecture-note">
                Extension의 Webview는 VS Code 내에서 격리된 환경에서 실행되기 때문에, Extension과 Sidebar, Graph Viewer 간의 통신은 Webview 메시지를 통해 이루어집니다.
              </p>

            </div>
          </div>
        </section>

        {/* Dependency Graph */}
        <section className="case-section dependency-section">
          <div className="section-number">07</div>

          <div className="case-content">
            <p className="eyebrow">DEPENDENCY GRAPH</p>

            <h2>
              Vision Assistant 의 
              <br />
              Dependency Graph
            </h2>

            <p>
              Vision Assistant는 프로젝트 안 소스코드의 import 관계를 분석하여 인터랙티브한 의존성 그래프로 시각화합니다. 아래는 실제 Frontend 소스코드를 바탕으로 Vision Assistant가 제작한 의존성 그래프입니다.
            </p>

            <DependencyGraph />

            <div className="graph-caption">
              <span>▲ INTERACTIVE DEMO</span>

              <p>
                Vision Assistant의 의존성 그래프를 직접 탐색해보세요.
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default Vision;