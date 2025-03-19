import React from "react";

function Experience() {
    return (
        <section id="experience">
            <h2>Experience</h2>
            <div className="experience-content">
                <div className="experience-item">
                    <h3>Lorem Ipsum Position</h3>
                    <p className="company">Lorem Ipsum Company</p>
                    <p className="period">2021 - Present</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li>Sed do eiusmod tempor incididunt ut labore et dolore</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
                    </ul>
                </div>

                <div className="experience-item">
                    <h3>Dolor Sit Position</h3>
                    <p className="company">Dolor Sit Company</p>
                    <p className="period">2019 - 2021</p>
                    <ul>
                        <li>Duis aute irure dolor in reprehenderit in voluptate</li>
                        <li>Excepteur sint occaecat cupidatat non proident</li>
                        <li>Sunt in culpa qui officia deserunt mollit anim</li>
                    </ul>
                </div>

                <div className="experience-item">
                    <h3>Consectetur Position</h3>
                    <p className="company">Consectetur Company</p>
                    <p className="period">2017 - 2019</p>
                    <ul>
                        <li>Nulla facilisi morbi tempus iaculis urna id volutpat</li>
                        <li>Vitae suscipit tellus mauris a diam maecenas</li>
                        <li>Massa tincidunt dui ut ornare lectus sit amet</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Experience;