/*
event loop is responsible for executing code, collecting and processing events and executing queued sub-tasks


JS execution flow is based on an event loop

-------------------------------------------------------------------
Event Loop

Endless loop where JS engine waits for tasks, executes them and then sleeps, waiting for more tasks


the algorithm of the engine:
1. While there are tasks:
- execute them, starting with the oldest task.
2. Sleep until a task appears, then go to 1.


The JS engine does nothing most of the time. it only runs if a script/handler/event activates

*/
