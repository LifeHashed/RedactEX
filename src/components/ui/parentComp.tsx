"use client"
import React, { useState } from "react";
import { Textarea } from "./textarea"; // Adjust the path as necessary
import { Button } from "./button"; // Adjust the path as necessary
import { Label } from "./label";

const ParentComponent = () => {
  const [text, setText] = useState<string>("");

  const handleClear = () => {
    setText(""); // Clear the textarea content
  };

  return (
    <>
            <div>
                <Label htmlFor="input-data">Input Data</Label>
                <Textarea id="input-data" className="mt-2 h-40" placeholder="Paste your data here..." value={text} onChange={(e) => setText(e.target.value)} />
              </div>
              
              <div className="flex justify-end gap-2">
                <Button variant="secondary" onClick={handleClear}>Clear</Button>
                <Button>Redact</Button>
              </div>
    </>
  );


}

export default ParentComponent;