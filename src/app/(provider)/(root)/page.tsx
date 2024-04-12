import Page from "@/components/Page";
import TodoList from "@/app/(provider)/(root)/_components/TodoList/TodoList";
import CreateTodoWrapper from "@/app/(provider)/(root)/_components/CreateTodoWrapper";

function HomePage() {
  return (
    <Page>
      <CreateTodoWrapper />
      <TodoList />
    </Page>
  );
}

export default HomePage;
