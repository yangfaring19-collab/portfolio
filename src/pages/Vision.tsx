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
            Enterprise AI Code Assistant
          </p>

          <p className="project-description">
            조직의 소스코드와 개발 문서를 함께 이해하여
            개발자가 낯선 프로젝트의 구조와 맥락을 
            빠르게 파악할 수 있도록 돕는
            VS Code 기반 AI Code Assistant입니다.
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
              <span>STACK</span>
              <strong>TypeScript · React · VSCode Extension API · Python · RAG · Ollama · SQLite</strong>
            </div>
          </div>
        </section>


        {/* Overview */}
        <section className="case-section">
          <div className="section-number">01</div>

          <div className="case-content">
            <p className="eyebrow">OVERVIEW</p>

            <h2>
              Helping developers understand unfamiliar codebases.
            </h2>

            <p>
              AI Coding Assistant는 코드를 생성하고 수정하는 데에는 강력하지만, 개발자가 처음 접하는 프로젝트의 전체적인 구조와 개발 맥락을 이해하는 과정까지 충분히 해결해주지는 못합니다. 
              <br />
              Vision은 이 문제에서 출발했습니다.
              <br />
              조직의 소스코드와 개발 문서를 함께 분석하고,
              AI Chat과 Dependency Graph를 통해 프로젝트의 구조와 관계를 탐색할 수 있도록 구성했습니다.
              <br />
              단순히 코드를 생성하는 도구가 아니라,
              <blockquote>
                이 프로젝트가 어떻게 구성되어 있고, 이 코드는 왜 이렇게 작성되어 있는가?
              </blockquote>
              라는 질문에 답하는 것을 목표로 했습니다.
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
              새로운 프로젝트에 합류한 개발자는 코드를 작성하기 전에 먼저 프로젝트를 이해해야 합니다. 이 과정에서 개발자는 IDE, Git history, 문서, 기존 코드를 오가며 필요한 정보를 직접 찾아야 합니다.
              <br />
              특히 조직 내부 프로젝트에서는 이러한 지식이 문서와 코드 곳곳에 분산되어 있기 때문에, 프로젝트에 익숙한 시니어 개발자에게 반복적으로 질문하게 되는 경우가 많습니다.
            </p>

            <div className="problem-grid">
              <div className="problem-card">
                <span>01</span>
                <h3>Scattered Knowledge</h3>
                <p>
                  방대한 소스코드와 더불어, 개발에 필요한 지식이 여기저기 흩어져 있습니다. 
                </p>
              </div>

              <div className="problem-card">
                <span>02</span>
                <h3>High Context Cost</h3>
                <p>
                  개발자가 기능 하나를 이해하기 위해 여러 파일과 문서를 직접 탐색해야 합니다.
                </p>
              </div>

              <div className="problem-card">
                <span>03</span>
                <h3>Repeated Questions</h3>
                <p>
                  프로젝트를 이해하고 있는 사수나 선임 개발자는, 아무것도 모르는 신입 개발자로부터 반복적으로 같은 질문을 받게 됩니다.
                </p>
              </div>

              <div className="problem-card">
                <span>04</span>
                <h3>Generic AI</h3>
                <p>
                  기존 AI Coding Assistant는 코드 생성에는 강하지만, 특정 조직의 프로젝트 구조와 개발 맥락을 지속적으로 이해하는 데에는 한계가 있습니다.
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
              코드 작성에 앞서,
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
                <span>01</span>
                <strong>AI Assistant</strong>
                <p>프로젝트의 소스코드와 문서를 기반으로 질문하고 답변을 얻을 수 있습니다.단순한 코드 생성이 아니라 프로젝트 내부의 정보를 검색하고 관련 context를 함께 활용하도록 구성했습니다.</p>
              </div>

              <div>
                <span>02</span>
                <strong>Project Context</strong>
                <p>프로젝트의 구조와 개발 정보를 AI가 활용할 수 있도록 RAG 기반으로 소스코드와 문서를 인덱싱합니다. 이를 통해 일반적인 지식이 아니라 현재 프로젝트에 존재하는 정보를 중심으로 답변하도록 했습니다.</p>
              </div>

              <div>
                <span>03</span>
                <strong>Dependency Graph</strong>
                <p>파일 간 import 관계를 분석하여 프로젝트의 구조를 시각적으로 표현합니다. 텍스트로만 코드를 탐색하는 대신 파일 간 연결 관계를 직접 확인할 수 있도록 했습니다.</p>
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
                    프로젝트의 소스코드와 개발 문서를 하나의 검색 대상으로 연결했습니다. 질문에 대한 관련 context를 검색한 뒤 검색 결과를 LLM에 전달하여 프로젝트에 특화된 답변을 생성합니다. 이를 통해 <b>Question → Retrieval → Context → Answer</b> 의 흐름으로 프로젝트 내부 정보를 활용합니다.
                  </p>
                </div>
              </article>

              <article className="feature-item">
                <span>02</span>

                <div>
                  <h3>AI Chat Assistant</h3>
                  <p>
                    VS Code 내부에서 프로젝트에 대해 질문하고 관련 코드와 문서를 기반으로 답변을 확인할 수 있습니다. 대화 기록은 세션 단위로 관리하여 이전 질문의 맥락을 유지하면서 프로젝트를 탐색할 수 있도록 구성했습니다.
                  </p>
                </div>
              </article>

              <article className="feature-item">
                <span>03</span>

                <div>
                  <h3>Dependency Graph</h3>
                  <p>
                    소스 파일 간의 import 관계를 시각화하고, 익숙하지 않은 프로젝트의 구조를 탐색합니다.
                  </p>
                </div>
              </article>

              <article className="feature-item">
                <span>04</span>

                <div>
                  <h3>Project Briefing</h3>
                  <p>
                    프로젝트의 구조, 코드, 문서, 개발 컨텍스트를 요약한 Briefing 문서를 만들어, 프로젝트의 전반적인 내용과 기능 탐색의 진입점을 제공합니다. 
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
              환경 제약에 맞춘
              <br />
              기술 선택
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

            <article className="tech-item">
              <h3>JS/TS</h3>
              <p>
                VS Code Extension과 Webview 사이의 타입 안정성을 확보하고 전체 프로젝트의 주요 로직을 하나의 언어로 구성했습니다.
              </p>
            </article>
            <article className="tech-item">
              <h3>React</h3>
              <p>
                VS Code Webview 내부의 복잡한 UI를 컴포넌트 단위로 구성하기 위해 사용했습니다.특히 Dependency Graph처럼 상태 변화가 많은 인터랙티브 화면에 활용했습니다.
              </p>
            </article>
            <article className="tech-item">
              <h3>React Flow</h3>
              <p>
                Dependency Graph의 node와 edge를 렌더링하고 zoom, pan, selection 등의 그래프 interaction을 구현했습니다.
              </p>
            </article>
            <article className="tech-item">
              <h3>Dagre</h3>
              <p>
                파일 간 관계 데이터를 사람이 탐색하기 쉬운 방향으로 자동 배치하기 위해 사용했습니다.
              </p>
            </article>
            <article className="tech-item">
              <h3>RAG</h3>
              <p>
                프로젝트 내부의 소스코드와 문서에서 질문과 관련된 정보를 검색하여
                LLM의 context로 제공했습니다.
              </p>
            </article>
            <article className="tech-item">
              <h3>Ollama</h3>
              <p>
                AWS 환경에서 Embedding model과 LLM을 실행할 수 있도록 구성했습니다.
              </p>
            </article>
            <article className="tech-item">
              <h3>SQLite</h3>
              <p>
                AI Chat history와 같은 사용자 데이터를 로컬에서 관리하기 위해 사용했습니다.
              </p>
            </article>
            <article className="tech-item">
              <h3>SSE</h3>
              <p>
                AI 응답을 한 번에 반환하지 않고
                생성되는 텍스트를 실시간으로 전달하기 위해 Server-Sent Events를 사용했습니다.
              </p>
            </article>
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

                  <div className="architecture-tags">
                    <span>Vanilla JS</span>
                    <span>HTML + CSS</span>
                    <span>VS Code API</span>
                    <span>TypeScript</span>
                  </div>
                  <br />
                  <p>
                    Vision Assistant Sidebar는 Server 정보 표시의 창구이자 명령 입력의 진입점입니다. VS Code 확장 내 격리된 환경에서 동작하는 HTML + CSS + JavaScript 기반 Webview로 구현되어 있습니다.
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

                </div>
              </article>


              <article className="architecture-layer">
                <div className="architecture-layer-number">
                  02
                </div>

                <div>
                  <h3>Chat Participant & Streaming</h3>

                  <div className="architecture-tags">
                    <span>Chat Participant</span>
                    <span>SSE Streaming</span>
                  </div>
                  <br />

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

                  <h5>Why SSE Streaming?</h5>
                  <br />
                  <p> 
                    AI 응답은 생성 시간이 길고 결과가 순차적으로 만들어집니다. 따라서 request → response 형태보다 서버에서 생성되는 결과를 지속적으로 전달할 수 있는 SSE가 적합했습니다. 사용자가 답변이 생성되는 중간 결과를 실시간으로 확인할 수 있기 때문에 UX 측면에서도 유리했습니다.
                  </p>

                </div>
              </article>

              <article className="architecture-layer">
                <div className="architecture-layer-number">
                  03
                </div>

                <div>
                  <h3>Dependency Graph</h3>

                  <div className="architecture-tags">
                    <span>VSCode Symbol Search</span>
                    <span>Import Statement Search</span>
                    <span>Dependency Graph</span>
                    <span>React</span>
                    <span>React Flow</span>
                    <span>Dagre</span>
                  </div>
                  <br />
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

                  <h5>Why local dependency graph?</h5>
                  <br />
                  <p>
                    외부 graph database를 도입하는 대신 Extension이 직접 dependency 정보를 생성하고 JSON으로 관리했습니다. 현재 요구사항에 필요한 정보만 유지함으로써 구조를 단순하게 만들고 Extension과의 결합도를 낮췄습니다.
                  </p>

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
          <div className="section-number">08</div>

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

        <section className="case-section outcome">
          <div className="section-number">09</div>

          <div className="case-content">
            <p className="eyebrow">OUTCOME</p>

            <h2>
              A developer tool 
              <br />
              built around understanding
            </h2>

            <p>
              Vision은 AI에게 코드를 작성시키는 것보다 개발자가 코드를 이해하는 과정에 집중했습니다. 프로젝트의 소스코드와 문서를 RAG로 연결하고, AI Chat을 통해 질문할 수 있도록 했으며, Dependency Graph를 통해 파일 간 구조를 직접 탐색할 수 있도록 구현했습니다.
              <br /><br />
              이 프로젝트를 통해 저희는 
              <blockquote>
                VS Code Extension의 실행 환경과 Webview 구조
                <br />
                React 기반 Webview UI
                <br />
                SSE 기반 AI streaming
                <br />
                RAG pipeline
                <br />
                Dependency analysis
                <br />
                Graph visualization
                <br />
                비동기 작업과 UI 상태 관리
              </blockquote>
              를 실제 제품 형태로 연결해보았습니다.
              <br /><br />
              무엇보다 하나의 기능을 구현하는 것에서 끝나지 않고, <b>문제를 정의하고 → 기술을 비교하고 → 구조를 설계하고 → 구현하고 → 실제 사용성을 다시 검토하는 과정</b>을 경험한 프로젝트였습니다. 
            </p>
          </div>
        </section>

        <section className="case-section retrospective">
          <div className="section-number">10</div>

          <div className="case-content">
            <p className="eyebrow">RETROSPECTIVE</p>

            <h2>
              What I learned
            </h2>

            <p>
              사실 이 프로젝트는, 처음 개발을 배우는 저에게 가장 필요한 서비스를 구현하고자 했던 것입니다. 실제 팀원들과 함께 작업하면서, AI가 만들어주는 코드를 이해하는 것이 개발자에게 얼마나 중요한 일인지를 강하게 깨닫게 되었습니다.
              <br /><br />
              프로젝트를 마치고 처음 이 프로젝트를 기획했던 의도를 돌아보니, 가장 필요한 것은 AI가 코드를 작성하는 것이 아니라 개발자가 코드를 이해하고 탐색할 수 있는 도구를 제공하는 것이었습니다.
              <br /><br />
              처음에는 RAG와 LLM을 중심으로 기능을 생각했지만, 실제로 프로젝트를 구현하면서 중요한 것은 어떤 정보를 수집하고, 어떻게 구조화하고, 언제 사용자에게 보여줄 것인가 라는 문제라는 것을 알게 되었습니다.
              <br /><br /> 
              Dependency Graph에서도 같은 문제를 경험했습니다. 모든 파일과 관계를 보여주는 것보다 사용자가 현재 보고 있는 파일과 관련된 정보를 강조하는 것이 더 유용했습니다.
              <br /><br />
              결국 개발자 도구를 만드는 과정에서는 기술을 추가하는 것보다 개발자의 실제 탐색 흐름을 이해하고 그 흐름에 맞춰 정보를 제공하는 것이 중요하다는 것을 배웠습니다.
            </p>
          </div>
        </section>

      </main>
    </>
  );
}

export default Vision;