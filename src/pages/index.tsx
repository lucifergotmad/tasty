import Head from "next/head";

export default function Home(props: any) {
  console.log(props);
  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <h1>Hello Worlds</h1>
    </>
  );
}

export async function getServerSideProps() {
  const results = await fetch(
    (process.env.NEXT_PUBLIC_API_URI as string) + "recipes/list",
    {
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY as string,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST as string,
      },
    }
  );

  const data = await results.json();

  return {
    props: {
      recipe_list: data,
    },
  };
}
