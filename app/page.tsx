"use client";
import { useState } from "react";

import SmartWatch from "@/components/SmartWatch";
import LazyImage from "@/components/LazyImage";
import LimitedTextArea from "@/components/LimitedTextArea";

// ----> gallery link : https://postimg.cc/gallery/BXgfykH

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

export default function Home() {
  const [s, setS] = useState(2);

  const [isShown, setIsShown] = useState(false);

  const toggleShow = () => {
    setIsShown(!isShown);
  };

  const detailsClassName = `details ${isShown ? "details-shown" : ""}`;

  const [fdata, setFdata] = useState<{
    name: string;
    description: string;
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
    description: "",
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

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

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

  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmitForm = async (e: any) => {
    const url =
      "https://script.google.com/macros/s/AKfycbyUyehgWwJC44dtGBUp0XO-rBkKil4bXKOW0d9LCDPPcR4YTFuftQPg3EpTnYQtUiA-QA/exec";

    const formData = new FormData();
    formData.append("name", fdata.name);
    formData.append("description", fdata.description);
    formData.append("voice", fdata.voice);
    formData.append("tone", fdata.tone);
    formData.append("look", fdata.look);
    formData.append("feel", fdata.feel);
    formData.append("brand_attributes", fdata.brand_attributes.join(", "));
    formData.append("audience_description", fdata.audience_description);
    formData.append("brand_demographics_male", fdata.brand_demographics_male);
    formData.append(
      "brand_demographics_female",
      fdata.brand_demographics_female
    );
    formData.append("the_dominance", fdata.the_dominance);

    // Calculate the percentage values
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

    // Add the percentage values to the form data
    formData.append("boldPercentage", boldPercentage.toString());
    formData.append("lightPercentage", lightPercentage.toString());
    formData.append("mainstreamPercentage", mainstreamPercentage.toString());
    formData.append("fringePercentage", fringePercentage.toString());
    formData.append("scientificPercentage", scientificPercentage.toString());
    formData.append("cosmicPercentage", cosmicPercentage.toString());
    formData.append("affordablePercentage", affordablePercentage.toString());
    formData.append("luxuriousPercentage", luxuriousPercentage.toString());
    formData.append("accessiblePercentage", accessiblePercentage.toString());
    formData.append("exclusivePercentage", exclusivePercentage.toString());
    formData.append("seriousPercentage", seriousPercentage.toString());
    formData.append("funPercentage", funPercentage.toString());

    e.preventDefault();

    setIsSuccess(true); // Set success state to true
    setIsPopupOpen(false);
    setTimeout(() => {
      setIsSuccess(false); // Close the popup after 3 seconds
      e.target.submit(); // Submit the form after 3 seconds
    }, 2000);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Form data submitted successfully!");

        // Optionally, perform any additional actions after successful submission
      } else {
        console.log("Form submission failed.");
      }
    } catch (error) {
      console.log("An error occurred during form submission:", error);
    }
  };

  //console.log(fdata);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleConfirmBack = () => {
    setIsPopupOpen(false);
  };
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  return (
    <div>
      <SmartWatch />
      <div className="form-stylescape">
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
            <p>• Imagine yourself somewhere amazing.</p>
            <p>
              • Imagine that the Brand is successfully running and has achieved
              the desired goals.
            </p>
            <p style={{ opacity: "0.5" }}>
              And then answer the following questions
            </p>
            <div className={detailsClassName}>
              <h3 style={{ fontWeight: "700" }}>What is Voice?</h3>
              <p style={{ opacity: "0.75" }}>
                Voice of the brand is the brands statement. What the brand says
                out loud about who they ate.
              </p>
              <h3 style={{ fontWeight: "700" }}>What is Tone?</h3>
              <p style={{ opacity: "0.75" }}>
                Tone is something that the audiance of the brand understand from
                the Voice of the brand. Both can be different.
              </p>
              <h3 style={{ fontWeight: "700" }}>What is Look?</h3>
              <p style={{ margin: "0 !important", opacity: "0.75" }}>
                Look is something the audience of the brand believes about the
                Brand.
              </p>
              <h3 style={{ fontWeight: "700" }}>What is Feel?</h3>
              <p style={{ opacity: "0.75" }}>
                Feel is something the audience of the brand talk about the
                Brand.
              </p>
            </div>

            <button onClick={toggleShow}>
              {isShown ? "Show Less" : "Learn More"}
            </button>
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

        {/* -------------------------------------------------------------------------------------> Form */}

        <form action="" id="myForm" onSubmit={handleSubmitForm}>
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
              name="name"
              placeholder="Enter Brand Name"
            />
            <label htmlFor="">Brand Description:</label>
            <LimitedTextArea
              value={fdata.description}
              onChange={(value: string) =>
                setFdata((data) => ({ ...data, description: value }))
              }
              name="description"
              placeholder="Enter Brand Description"
            />
            <button
              type="button"
              disabled={fdata.name == "" || fdata.description == ""}
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
                <LimitedTextArea
                  placeholder="in terms of voice"
                  name="voice"
                  onChange={(value: string) =>
                    setFdata((data) => ({ ...data, voice: value }))
                  }
                  value={fdata.voice}
                />
              </div>
              <div className="textarea">
                <label htmlFor="">Describe in terms of Tone:</label>
                <LimitedTextArea
                  name="tone"
                  placeholder="in terms of tone"
                  onChange={(value: string) =>
                    setFdata((data) => ({ ...data, tone: value }))
                  }
                  value={fdata.tone}
                />
              </div>
              <div className="textarea">
                <label htmlFor="">Describe in terms of Look:</label>
                <LimitedTextArea
                  name="look"
                  placeholder="in terms of look"
                  onChange={(value: string) =>
                    setFdata((data) => ({ ...data, look: value }))
                  }
                  value={fdata.look}
                />
              </div>
              <div className="textarea">
                <label htmlFor="">Describe in terms of Feel:</label>
                <LimitedTextArea
                  placeholder="in terms of feel"
                  name="feel"
                  onChange={(value: string) =>
                    setFdata((data) => ({ ...data, feel: value }))
                  }
                  value={fdata.feel}
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
                    name="brandAttributes"
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
            <LimitedTextArea
              placeholder="Enter Audience Description"
              name="audience_description"
              onChange={(value: string) =>
                setFdata((data) => ({
                  ...data,
                  audience_description: value,
                }))
              }
              value={fdata.audience_description}
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
                <LimitedTextArea
                  placeholder="(Male)"
                  name="brand_demographics_male"
                  onChange={(value: string) =>
                    setFdata((data) => ({
                      ...data,
                      brand_demographics_male: value,
                    }))
                  }
                  value={fdata.brand_demographics_male}
                />
              </div>
              <div className="female">
                <label htmlFor="">
                  Describe the brand if the brand is a human being (Female):
                </label>
                <LimitedTextArea
                  placeholder="(Female)"
                  name="brand_demographics_female"
                  onChange={(value: string) =>
                    setFdata((data) => ({
                      ...data,
                      brand_demographics_female: value,
                    }))
                  }
                  value={fdata.brand_demographics_female}
                />
              </div>
            </div>
            <label>Specify the Dominance:</label>
            <select
              name="the_dominance"
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
                    Light: <span>{lightPercentage}%</span>
                  </label>
                </div>
                <input
                  type="range"
                  name="bold_light"
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
                  name="mainstream_fringe"
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
                  name="scientific_cosmic"
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
                  name="affordable_luxurious"
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
                  name="accessible_exclusive"
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
                  name="serious_fun"
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
              <button
                disabled={s !== 6}
                type="button"
                onClick={handleOpenPopup}
              >
                Submit
              </button>
            </div>
          </div>
          {isPopupOpen && (
            <div className="submit-popup">
              <div className="card">
                <h4>Please confirm your submission</h4>
                <div className="data-card">
                  <h5>Brand Name:</h5>
                  <p>{fdata.name}</p>
                  <h5>Brand Description:</h5>
                  <p>{fdata.description}</p>
                  <h5>Brand Voice:</h5>
                  <p>{fdata.voice}</p>
                  <h5>Brand Tone:</h5>
                  <p>{fdata.tone}</p>
                  <h5>Brand Look:</h5>
                  <p>{fdata.look}</p>
                  <h5>Brand Feel:</h5>
                  <p>{fdata.feel}</p>
                  <h5>Brand Attributes:</h5>
                  <p>{fdata.brand_attributes.join(", ")}</p>
                  <h5>Audiance Description:</h5>
                  <p>{fdata.audience_description}</p>
                  <h5>Brand Demographics (Male):</h5>
                  <p>{fdata.brand_demographics_male}</p>
                  <h5>Brand Demographics (Female):</h5>
                  <p>{fdata.brand_demographics_female}</p>
                  <h5>Brand Demographics Dominance:</h5>
                  <p>{fdata.the_dominance}</p>
                  <h5>Brand Demographics Findings:</h5>
                  <p>Bold: {boldPercentage}%</p>
                  <p>Light: {lightPercentage} %</p>
                  <p>Common: {mainstreamPercentage}%</p>
                  <p>Dynamic: {fringePercentage}%</p>
                  <p>Logical:{scientificPercentage}%</p>
                  <p>Spiritual:{cosmicPercentage}%</p>
                  <p>Affordable: {affordablePercentage}%</p>
                  <p>Luxurious: {luxuriousPercentage}%</p>
                  <p>Accessible: {accessiblePercentage}%</p>
                  <p>Exclusive: {exclusivePercentage}%</p>
                  <p>Serious: {seriousPercentage}%</p>
                  <p>Fun: {funPercentage}%</p>
                </div>
                <div className="buttons">
                  <button type="button" onClick={handleConfirmBack}>
                    Back
                  </button>
                  <button type="submit">Confirm</button>
                </div>
              </div>
            </div>
          )}
        </form>
        {isSuccess && (
          <div className="success-popup">
            <div className="popup">
              <h3>Input Submited Successfully!</h3>
              <p>Please wait few hours for our response</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
