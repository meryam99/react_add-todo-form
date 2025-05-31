import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => (
  <article
    data-id="1"
    className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    {todo.user && <UserInfo user={todo.user} />}
  </article>
);
