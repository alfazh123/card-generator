'use client';

import { useState } from "react";

export default function CardGenerate () {
    const [text, setText] = useState("");
    const [font, setFont] = useState("arial");
    const [size, setSize] = useState("medium");
    const [color, setColor] = useState("#000000");
    const [top, setTop] = useState(0);
    const [bottom, setBottom] = useState(0);
    const [right, setRight] = useState(0);
    const [left, setLeft] = useState(0);



    return (
        <main className="flex md:flex-row flex-col min-h-screen items-center justify-between p-24">
          <section className="bg-slate-100 p-4 rounded-md">
            <form className="w-full justify-between space-y-4">
    
              <div className="flex flex-col">
                <label htmlFor="text">Text</label>
                <input type="text" name="text" id="text" onChange={(e) => {
                    setText(e.target.value);
                }}/>
              </div>
    
              <div className="flex flex-col">
                <label htmlFor="email">Font</label>
                <select name="font" id="font" onChange={(e) => {
                    setFont(e.target.value);
                }}>
                  <option value="arial">Arial</option>
                  <option value="times">Times</option>
                  <option value="courier">Courier</option>
                </select>
              </div>
    
              <div className="flex flex-col">
                <label htmlFor="size">Size</label>
                <select name="size" id="size" onChange={(e) => {
                    setSize(e.target.value);
                }}>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
    
              <div className="flex flex-col">
                <label htmlFor="color">Color</label>
                <input type="color" name="color" id="color" onChange={(e) => {
                    setColor(e.target.value);
                }} />
              </div>
    
              <div className="flex flex-col">
                <label htmlFor="top">Top</label>
                <input type="range" name="top" id="top" min={0} max={10}/>
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