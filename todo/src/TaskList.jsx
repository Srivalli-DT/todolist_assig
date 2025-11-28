export default function TaskList({ onAddTask,value }) {

return (
    <div className="input-row">
        <input 
        type ="text"
        placeholder="Enter your Task"
        value={value}
        onChange={(e) => {onAddTask(e.target.value); }}
        ></input>
    </div>
);
}