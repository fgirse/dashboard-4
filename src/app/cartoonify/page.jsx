import CloudinaryWrapper from "../components/cloudinarywrapper";

export default function Home() {

  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div>

        <h1>Cartoonify </h1>

        <CloudinaryWrapper

          cartoonify

          width="900"

          height="500"

          src="https://res.cloudinary.com/dxrwygxse/image/upload/v1695311368/reindeer.jpg"

          sizes="100vw"

          alt="Cartoon"

          className="rounded-lg"

        />

      </div>

    </main>

  );

}