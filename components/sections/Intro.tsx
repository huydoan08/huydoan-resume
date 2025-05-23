export default function Intro() {
  return (
    <section className="Intro flex flex-col items-center w-full">
      <h1 className="text-4xl font-bold">Doan Van Huy</h1>
      <div className="text-lg">Front-end Developer</div>
      {process.env.NEXT_PUBLIC_WEBSITE_URL ? (
        <div className="items-center gap-2 hidden print:flex">
          <a href={process.env.NEXT_PUBLIC_WEBSITE_URL} target="_blank">
            {process.env.NEXT_PUBLIC_WEBSITE_URL.replace("https://", "")}
          </a>
        </div>
      ) : null}
    </section>
  );
}
