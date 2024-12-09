function Summary() {
  return (
    <>
      <p className="text-4xl mb-8 mobile:text-center font-bold">
        About me
      </p>
      <article className="desktop:text-xl mobile:text-md" itemScope itemType="https://schema.org/author">
        <p className="mb-5">
          I&apos;m an IT Professional completing my bachelor's degree in Computer Science.
          From a young age, I&apos;ve enjoyed exploring the inner workings of computers, sparking a lifelong passion for technology.
          I thrive on analysing complex problems and crafting efficient, practical solutions that make a difference.
        </p>
      </article>
    </>
  );
}

export default Summary;