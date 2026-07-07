export function Overview() {
  return (
    <section
      id="overview"
      className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8"
    >
      <div className="border-taupe grid gap-8 rounded-[2rem] border bg-white/80 p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div className="flex flex-col gap-3">
          <p className="text-camel text-sm font-semibold tracking-[0.3em] uppercase">
            Overview
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-800 sm:text-4xl">
            A Front-End Developer in Ho Chi Minh City.
          </h2>
        </div>
        <div className="flex flex-col gap-4 text-base leading-7 text-stone-600">
          <p>
            Computer Science Engineering graduate with hands-on experience
            building web applications. Familiar with HTML, CSS, JavaScript, and
            Git. Looking for a junior or entry-level software developer role
            where I can contribute, learn, and grow.
          </p>
          <p>
            TOEIC certified (LR: 660/990, SW: 310/400) and comfortable with
            technical English. I enjoy solving frontend-related problems and
            love working with UI/UX design. I&apos;m also curious about new
            technologies and enjoy learning them.
          </p>
        </div>
      </div>
    </section>
  );
}
