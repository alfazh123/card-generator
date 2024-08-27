import Image from "next/image";

export default function Home() {
  return (
    <main className="flex md:flex-row flex-col min-h-screen items-center justify-between p-24">
      <section className="bg-slate-100 p-4 rounded-md">
        <form className="w-full justify-between space-y-4">

          <div className="flex flex-col">
            <label htmlFor="text">Text</label>
            <input type="text" name="text" id="text" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Font</label>
            <select name="font" id="font">
              <option value="arial">Arial</option>
              <option value="times">Times</option>
              <option value="courier">Courier</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="size">Size</label>
            <select name="size" id="size">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="color">Color</label>
            <input type="color" name="color" id="color" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="top">Top</label>
            <input type="range" name="top" id="top" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="bottom">Bottom</label>
            <input type="range" name="bottom" id="bottom" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="right">Right</label>
            <input type="range" name="right" id="right" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="left">Left</label>
            <input type="range" name="left" id="left" />
          </div>
        </form>
      </section>

      <section>
        <div className="relative w-96 h-64 bg-slate-100 p-4">
          <p className="absolute">Hello World</p>

          <div className="absolute bottom-10">
            <p>Consequat et cillum reprehenderit proident.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
