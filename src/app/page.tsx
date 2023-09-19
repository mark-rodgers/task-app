import PageTitle from "./components/PageTitle";
import Button from "./components/Button";

export default function Home() {
  return (
    <>
      <PageTitle title="Tasks">
        <Button href="/new">New Task</Button>
      </PageTitle>
      <main>homepage</main>
    </>
  );
}
