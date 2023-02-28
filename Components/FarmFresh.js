import { useState } from 'react';

const Section = ({ title, description, isVisible, setIsVisible }) => {
    return (
        <div className="border border-black m-2 p-2 rounded-lg">
            <div className="flex flex-row justify-between">
                <h2 className="font-semibold text-xl ml-1">{title}</h2>
                {
                    isVisible ? <button className="mr-1" onClick={() => setIsVisible(false)}>▲</button> : <button className="mr-1" onClick={() => setIsVisible(title)}>▼</button>
                }
            </div>
            {
                isVisible && <p className="ml-1">{description}</p>
            }
        </div>
    );
};

const FarmFresh = () => {
    const [visibleSection, setVisibleSection] = useState(false);
    return (
        <div className="m-3 p-3 border border-black rounded-2xl shadow-md bg-lime-50">
            <h1 className="m-2 p-2 font-bold text-2xl">K's Farm Fresh - Healthy, Organic Produce</h1>

            <Section title="About Farm Fresh" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." isVisible={visibleSection === 'About Farm Fresh'} setIsVisible={(sectionName) => setVisibleSection(sectionName)} />

            <Section title="Team" description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source." isVisible={visibleSection === 'Team'} setIsVisible={(sectionName) => setVisibleSection(sectionName)} />

            <Section title="Careers" description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." isVisible={visibleSection === 'Careers'} setIsVisible={(sectionName) => setVisibleSection(sectionName)} />
        </div>
    );
};

export default FarmFresh;