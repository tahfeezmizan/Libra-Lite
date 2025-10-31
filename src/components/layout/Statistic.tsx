export const Statistic = () => {
  const stats = [
    {
      count: "1.5K+",
      title: "Books Available",
      description:
        "A growing collection of fiction, non-fiction, and educational books managed effortlessly.",
    },
    {
      count: "4.2K+",
      title: "Total Borrows",
      description:
        "Track how many books have been borrowed and returned, in real time.",
    },
    {
      count: "100%",
      title: "Data Synced",
      description:
        "All your records are auto-synced with your system for seamless updates.",
    },
  ];

  return (
    <div className="py-16 container mx-auto px-2 xl:px-10 ">
      <div className="grid gap-10 row-gap-8 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="border p-6 rounded-lg text-center hover:bg-[#F5F5F5] duration-300"
          >
            <h6 className="mr-2 text-4xl font-bold md:text-5xl mb-2">
              {stat.count}
            </h6>

            <p className="mb-2 font-bold md:text-lg text-foreground">
              {stat.title}
            </p>
            <p className="text-muted-foreground">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
