"use client";
import { useState } from "react";

import SmartWatch from "@/components/SmartWatch";
import LazyImage from "@/components/LazyImage";

//* ----> gallery link : https://postimg.cc/gallery/BXgfykH
const bg_one = "https://i.postimg.cc/xCYhQ9Jb/bg-one.webp";
const bg_two = "https://i.postimg.cc/rw0vCn2z/bg-two.webp";
const bg_three = "https://i.postimg.cc/bw746xqg/bg-three.webp";
const bg_four = "https://i.postimg.cc/g03Q1xJW/bg-four.webp";
const bg_five = "https://i.postimg.cc/TYw8h2kV/bg-five.webp";
const bg_six = "https://i.postimg.cc/7YQFzvcp/bg-six.webp";

const bg_one20px = "https://i.postimg.cc/x8NCSGbC/bg-one20px.webp";
const bg_two20px = "https://i.postimg.cc/4ddyWRfp/bg-two20px.webp";
const bg_three20px = "https://i.postimg.cc/4nC34Kz1/bg-three20px.webp";
const bg_four20px = "https://i.postimg.cc/xTHvvMFn/bg-four20px.webp";
const bg_five20px = "https://i.postimg.cc/4dSdM2yq/bg-five20px.webp";
const bg_six20px = "https://i.postimg.cc/y6DXNwmJ/bg-six20px.webp";

const textareaRows = 4;

export default function Home() {
  const [s, setS] = useState(1);

  const handleBackClick = () => {
    if (s > 1) {
      setS((prevS) => prevS - 1);
    }
  };

  const handleNextClick = () => {
    if (s < 6) {
      setS((prevS) => prevS + 1);
    }
  };

  const [isShown, setIsShown] = useState(false);

  const toggleShow = () => {
    setIsShown(!isShown);
  };

  const detailsClassName = `details ${isShown ? "details-shown" : ""}`;

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const [fdata, setFdata] = useState<{
    name: string;
    Description: string;
    voice: string;
    tone: string;
    look: string;
    feel: string;
    brand_attributes: string[];
    audience_description: string;
    brand_demographics_male: string;
    brand_demographics_female: string;
    the_dominance: string;
    bold_light: string;
    mainstream_fringe: string;
    scientific_cosmic: string;
    affordable_luxurious: string;
    accessible_exclusive: string;
    serious_fun: string;
  }>({
    name: "",
    Description: "",
    voice: "",
    tone: "",
    look: "",
    feel: "",
    brand_attributes: [],
    audience_description: "",
    brand_demographics_male: "",
    brand_demographics_female: "",
    the_dominance: "",
    bold_light: "50", // Set default value to 50
    mainstream_fringe: "50",
    scientific_cosmic: "50",
    affordable_luxurious: "50",
    accessible_exclusive: "50",
    serious_fun: "50",
  });

  const checkboxes = [
    { id: "1", label: "Rustic" },
    { id: "2", label: "Vibrant" },
    { id: "3", label: "Historic" },
    { id: "4", label: "Authentic" },
    { id: "5", label: "Trendy" },
    { id: "6", label: "Refined" },
    { id: "7", label: "Industrial" },
    { id: "8", label: "Comforting" },
    { id: "9", label: "Glamourous" },
  ];

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const boldPercentage = 100 - parseInt(fdata.bold_light, 10);
  const lightPercentage = parseInt(fdata.bold_light, 10);
  const mainstreamPercentage = 100 - parseInt(fdata.mainstream_fringe, 10);
  const fringePercentage = parseInt(fdata.mainstream_fringe, 10);
  const scientificPercentage = 100 - parseInt(fdata.scientific_cosmic, 10);
  const cosmicPercentage = parseInt(fdata.scientific_cosmic, 10);
  const affordablePercentage = 100 - parseInt(fdata.affordable_luxurious, 10);
  const luxuriousPercentage = parseInt(fdata.affordable_luxurious, 10);
  const accessiblePercentage = 100 - parseInt(fdata.accessible_exclusive, 10);
  const exclusivePercentage = parseInt(fdata.accessible_exclusive, 10);
  const seriousPercentage = 100 - parseInt(fdata.serious_fun, 10);
  const funPercentage = parseInt(fdata.serious_fun, 10);

  return (
    <div>
      <SmartWatch />
      <div className="change-page">
        <label>Page: {s}</label>
        <br />
        <button onClick={handleBackClick}>Back</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
      <div className="form-stylescape">
        <p className="page-no">Form Section: {s}/6</p>
        <div
          className="left-container"
          style={{
            display: s === 1 ? "flex" : "none",
            opacity: s === 1 ? "1" : "0",
          }}
        >
          <LazyImage url={bg_one} smallUrl={bg_one20px} />

          <div className="stylescape-text">
            <h1>#StyleScape</h1>
            <h3>AI Brand Report Generator</h3>

            <div className={detailsClassName}>
              <p>
                A stylescape is a visual representation of a brand&apos;s design
                direction that encompasses typography, color palettes, imagery,
                and overall aesthetic. It&apos;s an essential tool for designers
                to communicate their ideas and ensure the client&apos;s vision
                aligns with theirs.
              </p>
              <p>
                To create a stylescape, clients are typically asked to provide
                information about their brand&apos;s personality, target
                audience, and design preferences.
              </p>
              <p>
                This information is then used to develop a comprehensive visual
                language that accurately reflects the brand&apos;s identity and
                values. The stylescape form helps designers gather and organize
                this important data efficiently and effectively.
              </p>
            </div>

            <button onClick={toggleShow}>
              {isShown ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
        <div
          className="left-container"
          style={{
            display: s === 2 ? "flex" : "none",
            opacity: s === 2 ? "1" : "0",
          }}
        >
          <LazyImage url={bg_two} smallUrl={bg_two20px} />
          <div className="stylescape-text">
            <h2>Mind Walking</h2>
            <p>Imagine yourself somewhere amazing, exactly 1 year from now</p>
          </div>
        </div>
        <div
          className="left-container"
          style={{
            display: s === 3 ? "flex" : "none",
            opacity: s === 3 ? "1" : "0",
          }}
        >
          <LazyImage url={bg_three} smallUrl={bg_three20px} />
          <div className="stylescape-text">
            <h2>Mind Walking</h2>
            <p>Select Brand Attributes</p>
          </div>
        </div>
        <div
          className="left-container"
          style={{
            display: s === 4 ? "flex" : "none",
            opacity: s === 4 ? "1" : "0",
          }}
        >
          <LazyImage url={bg_four} smallUrl={bg_four20px} />
          <div className="stylescape-text">
            <h2>Empathy Map</h2>
            <p>
              An empathy map is a tool used in the stylescape design process to
              help understand the target audience&apos;s needs and desires. It
              is a visual representation of the customer&apos;s thoughts,
              feelings, beliefs, and behaviors related to the brand.
            </p>
          </div>
        </div>
        <div
          className="left-container"
          style={{
            display: s === 5 ? "flex" : "none",
            opacity: s === 5 ? "1" : "0",
          }}
        >
          <LazyImage url={bg_five} smallUrl={bg_five20px} />
          <div className="stylescape-text">
            <h2>Brand Demographics</h2>
            <p>
              Brand Demographics is a humanization of the brand itself in terms
              of the essence.
            </p>
          </div>
        </div>
        <div
          className="left-container"
          style={{
            display: s === 6 ? "flex" : "none",
            opacity: s === 6 ? "1" : "0",
          }}
        >
          <LazyImage url={bg_six} smallUrl={bg_six20px} />
          <div className="stylescape-text">
            <h2>Brand Demographic Findings</h2>
            <p>Describe the brand in the range of the following attributes.</p>
          </div>
        </div>
        <form action="#" onSubmit={handleSubmit}>
          <div
            style={{ display: s == 1 ? "flex" : "none" }}
            className="form-scetion-brand"
          >
            <h2>Basic Details</h2>
            <label htmlFor="">Brand Name:</label>
            <input
              value={fdata.name}
              onChange={(e) =>
                setFdata((data) => ({ ...data, name: e.target.value }))
              }
              type="text"
              placeholder="Enter Brand Name"
            />
            <label htmlFor="">Brand Description:</label>
            <textarea
              value={fdata.Description}
              rows={textareaRows}
              onChange={(e) =>
                setFdata((data) => ({ ...data, Description: e.target.value }))
              }
              placeholder="Enter Brand Description"
            />
            <button
              type="button"
              disabled={fdata.name == "" || fdata.Description == ""}
              onClick={() => setS(2)}
            >
              Next
            </button>
          </div>
          <div
            style={{ display: s == 2 ? "flex" : "none" }}
            className="form-scetion-mindWalking"
          >
            <h3>Describe the Brand (desired future state)</h3>
            <p>In terms of voice, tone, look and feel:</p>
            <div className="textarea-container">
              <div className="textarea">
                <label htmlFor="">Describe in terms of Voice:</label>
                <textarea
                  placeholder="in terms of voice"
                  rows={textareaRows}
                  onChange={(e) =>
                    setFdata((data) => ({ ...data, voice: e.target.value }))
                  }
                />
              </div>
              <div className="textarea">
                <label htmlFor="">Describe in terms of Tone:</label>
                <textarea
                  placeholder="in terms of tone"
                  rows={textareaRows}
                  onChange={(e) =>
                    setFdata((data) => ({ ...data, tone: e.target.value }))
                  }
                />
              </div>
              <div className="textarea">
                <label htmlFor="">Describe in terms of Look:</label>
                <textarea
                  placeholder="in terms of look"
                  rows={textareaRows}
                  onChange={(e) =>
                    setFdata((data) => ({ ...data, look: e.target.value }))
                  }
                />
              </div>
              <div className="textarea">
                <label htmlFor="">Describe in terms of Feel:</label>
                <textarea
                  placeholder="in terms of feel"
                  rows={textareaRows}
                  onChange={(e) =>
                    setFdata((data) => ({ ...data, feel: e.target.value }))
                  }
                />
              </div>
            </div>
            <div className="back-next-button">
              <button type="button" onClick={() => setS(1)}>
                Back
              </button>
              <button
                type="button"
                disabled={
                  fdata.voice == "" ||
                  fdata.tone == "" ||
                  fdata.look == "" ||
                  fdata.feel == ""
                }
                onClick={() => setS(3)}
              >
                Next
              </button>
            </div>
          </div>
          <div
            style={{ display: s == 3 ? "flex" : "none" }}
            className="form-scetion-mindWalking-brand-attributes"
          >
            <h3>Brand Attributes (Multiple Choice)</h3>
            <p>*Select minium three attributes</p>
            <div className="brand-attributes">
              {checkboxes.map(({ id, label }) => (
                <div key={id} className="brand-attribute">
                  <label
                    className={`${checkedItems[id] ? "checked" : ""}`}
                    htmlFor={id}
                  >
                    {label}
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id={id}
                    onClick={(e: any) => {
                      const newCheckedItems = {
                        ...checkedItems,
                        [id]: e.target.checked,
                      };
                      setCheckedItems(newCheckedItems);

                      if (e.target.checked) {
                        setFdata((s) => ({
                          ...s,
                          brand_attributes: [...s.brand_attributes, label],
                        }));
                      } else {
                        setFdata((s) => ({
                          ...s,
                          brand_attributes: s.brand_attributes.filter(
                            (v) => v !== label
                          ),
                        }));
                      }
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="back-next-button">
              <button type="button" onClick={() => setS(2)}>
                Back
              </button>
              <button
                type="button"
                disabled={fdata.brand_attributes.length < 3}
                onClick={() => setS(4)}
              >
                Next
              </button>
            </div>
          </div>
          <div
            style={{ display: s == 4 ? "flex" : "none" }}
            className="form-scetion-map"
          >
            <label htmlFor="">
              Describe your desired Audience&apos; lifestyles, including what
              they think, feel, and believe about the brand. What they likes to
              hear and see, what they say and do, and what their pains, tasks,
              and gains are:
            </label>
            <textarea
              placeholder="Enter Audience Description"
              rows={textareaRows}
              onChange={(e) =>
                setFdata((data) => ({
                  ...data,
                  audience_description: e.target.value,
                }))
              }
            />
            <div className="back-next-button">
              <button type="button" onClick={() => setS(3)}>
                Back
              </button>
              <button
                type="button"
                onClick={() => setS(5)}
                disabled={fdata.audience_description == ""}
              >
                Next
              </button>
            </div>
          </div>
          <div
            style={{ display: s == 5 ? "flex" : "none" }}
            className="form-scetion-brand-demographics"
          >
            <div className="brand-demographics-textarea">
              <div className="male">
                <label htmlFor="">
                  Describe the brand if the brand is a human being (Male):
                </label>
                <textarea
                  placeholder="(Male)"
                  rows={textareaRows}
                  onChange={(e) =>
                    setFdata((data) => ({
                      ...data,
                      brand_demographics_male: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="female">
                <label htmlFor="">
                  Describe the brand if the brand is a human being (Female):
                </label>
                <textarea
                  placeholder="(Female)"
                  rows={4}
                  onChange={(e) =>
                    setFdata((data) => ({
                      ...data,
                      brand_demographics_female: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <label>Specify the Dominance:</label>
            <select
              name=""
              id=""
              onChange={(e) =>
                setFdata((data) => ({
                  ...data,
                  the_dominance: e.target.value,
                }))
              }
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <div className="back-next-button">
              <button type="button" onClick={() => setS(4)}>
                Back
              </button>
              <button
                type="button"
                onClick={() => setS(6)}
                disabled={
                  fdata.brand_demographics_male == "" ||
                  fdata.brand_demographics_female == "" ||
                  (fdata.the_dominance !== "Male" &&
                    fdata.the_dominance !== "Female")
                }
              >
                Next
              </button>
            </div>
          </div>
          <div
            style={{ display: s == 6 ? "flex" : "none" }}
            className="form-scetion-brand-bemographics-findings"
          >
            <h3>Slide the handle to spacify the avarage values:</h3>
            <div className="sliders">
              <div className="slider">
                <div className="slider-label">
                  <label htmlFor="">
                    Bold: <span>{boldPercentage}%</span>
                  </label>
                  <label htmlFor="">
                    Pale/Light: <span>{lightPercentage}%</span>
                  </label>
                </div>
                <input
                  type="range"
                  name=""
                  id=""
                  min={5}
                  max={95}
                  required
                  value={fdata.bold_light}
                  onChange={(e) =>
                    setFdata((data) => ({
                      ...data,
                      bold_light: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="slider">
                <div className="slider-label">
                  <label htmlFor="">Common: {mainstreamPercentage}%</label>
                  <label htmlFor="">
                    Dynamic: <span>{fringePercentage}%</span>
                  </label>
                </div>
                <input
                  type="range"
                  name=""
                  id=""
                  min={5}
                  max={95}
                  required
                  value={fdata.mainstream_fringe}
                  onChange={(e) =>
                    setFdata((data) => ({
                      ...data,
                      mainstream_fringe: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="slider">
                <div className="slider-label">
                  <label htmlFor="">
                    Logical: <span>{scientificPercentage}%</span>
                  </label>
                  <label htmlFor="">
                    Spiritual: <span>{cosmicPercentage}%</span>
                  </label>
                </div>
                <input
                  type="range"
                  name=""
                  id=""
                  min={5}
                  max={95}
                  required
                  value={fdata.scientific_cosmic}
                  onChange={(e) =>
                    setFdata((data) => ({
                      ...data,
                      scientific_cosmic: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="slider">
                <div className="slider-label">
                  <label htmlFor="">
                    Affordable: <span>{affordablePercentage}%</span>
                  </label>
                  <label htmlFor="">
                    Luxurious: <span>{luxuriousPercentage}%</span>
                  </label>
                </div>
                <input
                  type="range"
                  name=""
                  id=""
                  min={5}
                  max={95}
                  required
                  value={fdata.affordable_luxurious}
                  onChange={(e) =>
                    setFdata((data) => ({
                      ...data,
                      affordable_luxurious: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="slider">
                <div className="slider-label">
                  <label htmlFor="">
                    Accessible: <span>{accessiblePercentage}%</span>
                  </label>
                  <label htmlFor="">
                    Exclusive: <span>{exclusivePercentage}%</span>
                  </label>
                </div>
                <input
                  type="range"
                  name=""
                  id=""
                  min={5}
                  max={95}
                  required
                  value={fdata.accessible_exclusive}
                  onChange={(e) =>
                    setFdata((data) => ({
                      ...data,
                      accessible_exclusive: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="slider">
                <div className="slider-label">
                  <label htmlFor="">
                    Serious: <span>{seriousPercentage}%</span>
                  </label>
                  <label htmlFor="">
                    Fun: <span>{funPercentage}</span>
                  </label>
                </div>
                <input
                  type="range"
                  name=""
                  id=""
                  min={5}
                  max={95}
                  required
                  value={fdata.serious_fun}
                  onChange={(e) =>
                    setFdata((data) => ({
                      ...data,
                      serious_fun: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

            {/* <div>
            <div>
              Note:
              <ul>
                <li>
                  A Logo is not a Brand: A Brand is a person’s gut feeling about
                  a product, service or organization.
                </li>
                <li>
                  A Logo is an Identity: It exist in the hearts and minds of
                  Individuals.
                </li>
                <li>
                  A Logo should be Simple & Memorable: Audience should recognize
                  what the brand is by just looking at the logo with respect to
                  time.
                </li>
              </ul>
              Always remember, &quot;Less is More&quot;. Thank You.
            </div>
          </div> */}
            <div className="back-next-button">
              <button type="button" onClick={() => setS(5)}>
                Back
              </button>
              <button disabled={s !== 6} type="submit" onClick={() => setS(1)}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
