import { filterActions } from "../../constant";
import { useFilter } from "../../context";
import "./filter.css";

const priorityData = [
  { id: "priorityAll", value: "all", labelName: "Todos" },
  { id: "priorityHigh", value: "high", labelName: "Alta" },
  { id: "PriorityMedium", value: "medium", labelName: "Media" },
  { id: "priorityLow", value: "low", labelName: "Baja" },
];

const changeHandler = (e, filterDispatch) => {
  filterDispatch({
    type: filterActions.PRIORITY_CHANGE,
    payload: { priority: e.target.value },
  });
};

export const Filters = () => {
  const { filterState, filterDispatch } = useFilter();

  return (
    <div className="filter--container">
      <div>
        <label htmlFor="sortByTime" className="m-r-1">
          Ordenar por
        </label>
        <select
          id="sortByTime"
          value={filterState?.sort}
          onChange={(e) =>
            filterDispatch({
              type: filterActions.SORT_CHANGE,
              payload: { sort: e.target.value },
            })
          }
        >
          <option value="newest">Desendente</option>
          <option value="oldest">Ascendente</option>
        </select>
      </div>
      <div className="priority--container">
        <p>Prioridad</p>
        {priorityData.map((priority) => (
          <span key={priority.id}>
            <input
              type="radio"
              id={priority.id}
              className="priority--radio"
              name="priority"
              value={priority.value}
              checked={filterState.priority === priority.value ? true : false}
              onChange={(e) => changeHandler(e, filterDispatch)}
            />
            <label htmlFor={priority.id} className="radio--label">
              {priority.labelName}
            </label>
          </span>
        ))}
      </div>
    </div>
  );
};
