
import { useState, useEffect } from "react";
import "./App.css";

function CatDuo() {
  return (
    <div className="cat-duo">
      <svg
        className="cat-illustration"
        viewBox="0 0 420 210"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="A black cat and a white cat wearing red bows"
      >
        {/* BLACK CAT */}
        <g className="black-kitten">

          {/* Tail */}
          <path
            className="cat-tail black-tail"
            d="M105 157 C25 190 25 105 60 115 C85 122 80 145 65 146"
            fill="none"
            stroke="#171318"
            strokeWidth="13"
            strokeLinecap="round"
          />

          {/* Body */}
          <path
            d="M62 112 C35 135 40 190 75 194 L130 194 C158 185 151 137 120 112Z"
            fill="#171318"
            stroke="#51434a"
            strokeWidth="2"
          />

          {/* White chest */}
          <path
            d="M79 116 L91 136 L100 127 L111 138 L122 116 C120 145 111 155 100 160 C88 152 80 139 79 116Z"
            fill="#fff5f5"
          />

          {/* Head */}
          <path
            d="M39 75 L45 17 L82 49 Q101 40 120 49 L157 17 L162 76 Q176 119 100 132 Q27 120 39 75Z"
            fill="#171318"
            stroke="#75615a"
            strokeWidth="3"
          />

          {/* Ears */}
          <path
            d="M48 59 L51 25 L76 51Z M126 51 L153 25 L151 61Z"
            fill="#171318"
          />

          {/* Eyes */}
          <ellipse cx="72" cy="84" rx="20" ry="12"
            transform="rotate(24 72 84)" fill="#e9e944" />
          <ellipse cx="128" cy="84" rx="20" ry="12"
            transform="rotate(-24 128 84)" fill="#e9e944" />

          <ellipse cx="76" cy="84" rx="4" ry="11" fill="#25251b" />
          <ellipse cx="124" cy="84" rx="4" ry="11" fill="#25251b" />

          <circle cx="70" cy="80" r="3" fill="white" />
          <circle cx="126" cy="80" r="3" fill="white" />

          {/* Nose and mouth */}
          <path d="M95 103 Q100 98 105 103 L100 109Z" fill="#e52c48" />
          <path d="M100 109 Q91 120 84 112 M100 109 Q109 120 116 112"
            fill="none" stroke="#a99ba0" strokeWidth="2" />

          {/* Whiskers */}
          <g stroke="#b7a7a8" strokeWidth="1.5" fill="none">
            <path d="M82 108 L38 103 M82 114 L37 119 M118 108 L162 103 M118 114 L163 119" />
          </g>

          {/* Red bow */}
          <g className="cat-bow">
            <path d="M87 43 Q58 19 54 45 Q56 62 91 53Z" fill="#d92536" />
            <path d="M109 43 Q140 19 145 45 Q143 62 105 53Z" fill="#d92536" />
            <circle cx="100" cy="48" r="8" fill="#a91127" />
          </g>

          {/* Paws */}
          <g fill="#171318" stroke="#75615a" strokeWidth="1.5">
            <ellipse cx="78" cy="191" rx="15" ry="10" />
            <ellipse cx="117" cy="191" rx="15" ry="10" />
          </g>

        </g>

        {/* WHITE CAT */}
        <g className="white-kitten">

          {/* Tail */}
          <path
            className="cat-tail white-tail"
            d="M310 159 C395 190 402 110 367 120 C342 127 350 148 365 148"
            fill="none"
            stroke="#fff8f4"
            strokeWidth="13"
            strokeLinecap="round"
          />

          {/* Body */}
          <path
            d="M264 112 C238 137 245 190 275 194 L330 194 C360 184 355 135 323 112Z"
            fill="#fff8f4"
            stroke="#d7c6b8"
            strokeWidth="2"
          />

          {/* Black chest */}
          <path
            d="M275 119 L287 143 L300 132 L313 143 L324 119 Q320 151 300 158 Q279 151 275 119Z"
            fill="#171318"
          />

          {/* Head */}
          <path
            d="M239 75 L245 17 L282 49 Q301 40 320 49 L357 17 L361 76 Q375 119 300 132 Q227 120 239 75Z"
            fill="#fff8f4"
            stroke="#d7c6b8"
            strokeWidth="3"
          />

          {/* Ears */}
          <path d="M248 58 L251 25 L276 51Z M326 51 L353 25 L351 59Z"
            fill="#fff8f4" />

          {/* Black forehead stripes */}
          <g stroke="#171318" strokeWidth="6" strokeLinecap="round">
            <path d="M289 47 L291 78" />
            <path d="M300 44 L300 76" />
            <path d="M311 47 L309 78" />
          </g>

          {/* Eyes */}
          <ellipse cx="272" cy="84" rx="20" ry="12"
            transform="rotate(24 272 84)" fill="#e9e944" />
          <ellipse cx="328" cy="84" rx="20" ry="12"
            transform="rotate(-24 328 84)" fill="#e9e944" />

          <ellipse cx="276" cy="84" rx="4" ry="11" fill="#25251b" />
          <ellipse cx="324" cy="84" rx="4" ry="11" fill="#25251b" />

          <circle cx="270" cy="80" r="3" fill="white" />
          <circle cx="326" cy="80" r="3" fill="white" />

          {/* Nose and mouth */}
          <path d="M295 103 Q300 98 305 103 L300 109Z" fill="#4b393a" />
          <path d="M300 109 Q291 120 284 112 M300 109 Q309 120 316 112"
            fill="none" stroke="#4b393a" strokeWidth="2" />

          {/* Whiskers */}
          <g stroke="#75686a" strokeWidth="1.5" fill="none">
            <path d="M282 108 L238 103 M282 114 L237 119 M318 108 L362 103 M318 114 L363 119" />
          </g>

          {/* Red bow tie */}
          <g className="cat-bow">
            <path d="M287 139 Q262 118 259 143 Q265 159 295 150Z" fill="#d92536" />
            <path d="M313 139 Q338 118 341 143 Q335 159 305 150Z" fill="#d92536" />
            <circle cx="300" cy="145" r="8" fill="#a91127" />
          </g>

          {/* Paws */}
          <g fill="#fff8f4" stroke="#d7c6b8" strokeWidth="1.5">
            <ellipse cx="278" cy="191" rx="15" ry="10" />
            <ellipse cx="317" cy="191" rx="15" ry="10" />
          </g>

        </g>
      </svg>

      <div className="cat-caption">
        ♡
      </div>
    </div>
  );
}

function App() {

const [tasks, setTasks] = useState(() => {
  try {
    const savedTasks = localStorage.getItem("myday-tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          {
            id: 1,
            title: "Complete project planning",
            category: "Study",
            done: true,
          },
          {
            id: 2,
            title: "Review today's lessons",
            category: "Study",
            done: false,
          },
          {
            id: 3,
            title: "Work on MyDay application",
            category: "Personal",
            done: false,
          },
          {
            id: 4,
            title: "Organize weekly goals",
            category: "Personal",
            done: false,
          },
        ];
  } catch {
    return [];
  }
});

useEffect(() => {
  localStorage.setItem("myday-tasks", JSON.stringify(tasks));
}, [tasks]);

const [newTask, setNewTask] = useState("");

const completed = tasks.filter(task => task.done).length;

const progress = tasks.length
  ? Math.round((completed / tasks.length) * 100)
  : 0;

function addTask(e) {
  e.preventDefault();
  if (!newTask.trim()) return;

  setTasks(prev => [
    ...prev,
    {
      id: Date.now(),
      title: newTask.trim(),
      category: "Personal",
      done: false,
    },
  ]);

  setNewTask("");
}

function toggleTask(id) {
  setTasks(prev =>
    prev.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    )
  );
}

function deleteTask(id) {
  setTasks(prev => prev.filter(task => task.id !== id));
}
return (
  <div className="app">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="brand">
          <span className="brand-icon">♡
</span>
          <span>PRETTYNOW</span>
        </div>

        <p className="menu-label">MY SPACE</p>

        <nav>
          <a className="nav-item active" href="#dashboard">
            ♡ Dashboard
          </a>

          <a className="nav-item" href="#tasks">
            ☷ My Tasks ♡

          </a>

          <a className="nav-item" href="#calendar">
            ▦ Calendar ♡

          </a>

          <a className="nav-item" href="#goals">
            ☆ My Goals ♡

          </a>

          <a className="nav-item" href="#notes">
            ✎ My Notes ♡

          </a>
        </nav>

        <div className="sidebar-bottom">

          <div className="quote">
            <span>🍒</span>
            <p>
              Make yourself a priority.
              Your dreams deserve your time.
            </p>
          </div>

          <div className="profile">
            <div className="avatar">A</div>

            <div>
              <strong>My Space</strong>
              <small>bla bla bla</small>
            </div>
          </div>

        </div>
      </aside>

      {/* MAIN DASHBOARD */}
      <main className="main" id="dashboard">

        <header className="topbar">

          <div>
            <span className="date-label">
              WELCOME TO OUR LITTLE WORLD
            </span>

            <h1>
              My Dashboard <span>🍒♡
</span>
            </h1>
          </div>

          <div className="top-actions">
            <span className="today-pill">
              🖤 Make today count ♡

            </span>

            <div className="avatar">A</div>
          </div>

        </header>

        {/* WELCOME SECTION */}
        <section className="welcome">

          <div>
            <p> ♡
HEY, PRETTY! 🖤</p>

            <h2>
             ♡
 our day,<br />
              ♡
our rules.
            </h2>

            <span>
              NOW OR NEVER.
            </span>
          </div>

        {/* NEW SVG CATS */}
<CatDuo />

            </section>

        {/* STATISTICS */}
        <section className="stats">

          <div className="stat-card pink">
            <span>🍒</span>
            <p>Total tasks</p>
            <h2>{tasks.length}</h2>
          </div>

          <div className="stat-card purple">
            <span>🖤</span>
            <p>Completed</p>
            <h2>{completed}</h2>
          </div>

          <div className="stat-card peach">
            <span>♡</span>
            <p>Remaining</p>
            <h2>{tasks.length - completed}</h2>
          </div>

        </section>

        {/* TASKS AND FOCUS */}
        <section className="content-grid">

          <div className="task-panel" id="tasks">

            <div className="section-heading">

              <div>
                <h2>Today's Tasks 🍒</h2>
                <p>DO U LITTLE BRAT 🖤</p>
              </div>

              <span className="task-count">
                {completed}/{tasks.length}
              </span>

            </div>

            {/* PROGRESS */}
            <div className="progress-info">
              <span>Daily progress</span>
              <strong>{progress}%</strong>
            </div>

            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* ADD TASK */}
            <form className="add-task" onSubmit={addTask}>

              <input
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
                placeholder="What needs to get done? 🍒"
              />

              <button type="submit">
                + Add
              </button>

            </form>

            {/* TASK LIST */}
            <div className="task-list">

              {tasks.map(task => (

                <div className="task-item" key={task.id}>

                  <button
                    type="button"
                    className={`check ${task.done ? "checked" : ""}`}
                    onClick={() => toggleTask(task.id)}
                    aria-label="Toggle task"
                  >
                    {task.done ? "✓" : ""}
                  </button>

                  <div className="task-details">

                    <strong className={task.done ? "done" : ""}>
                      {task.title}
                    </strong>

                    <small>{task.category}</small>

                  </div>

                  <button
                    type="button"
                    className="delete-task"
                    onClick={() => deleteTask(task.id)}
                    aria-label="Delete task"
                  >
                    ×
                  </button>

                </div>

              ))}

              {tasks.length === 0 && (
                <p className="empty">
                  Nothing here yet. Add your first task! 🍒
                </p>
              )}

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="side-panel">

            <div className="mini-card" id="calendar">

              <h2>Today's Focus 🖤</h2>

              <p>
                Focus on what matters most.
              </p>

              <div className="focus-number">
                {tasks.length - completed}
              </div>

              <strong>
                Tasks left to complete
              </strong>

            </div>

            <div className="mini-card motivation" id="goals">

              <span>🐈‍⬛</span>

              <h3>Little Reminder</h3>

              <p>
                You are capable of amazing things.
                Take it one step at a time.
              </p>

            </div>

            <div className="mini-card leopard-card" id="notes">

              <span>🐆</span>

              <h3>Stay iconic.</h3>

              <p>
                A little confidence, a little ambition,
                and a lot of determination.
              </p>

            </div>

          </div>

        </section>

        <footer>
          Made with ♡ and a little cherry magic 🍒
        </footer>
      </main>
    </div>
  );
}

export default App;