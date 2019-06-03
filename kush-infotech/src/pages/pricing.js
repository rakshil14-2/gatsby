import React from "react";
import Layout from "../components/layout";

const Pricing = ()  => {
    return <Layout>
        <div className="pricing-container">
            <p>
                Our technology stack for web development is React (core React, Gatsby and Next.js), Angular, 
                JavaScript, ES6 / ES7, PostgreSql and Node.js. For mobile application development we use Flutter 
                from Google and React native. We work remotely on following pricing models.
            </p>
            <div className="section-container">
                <div className="section">
                    <strong>Fixed price:</strong>
                    <p>
                            For simple and fully defined projects we quote fixed price. We generally charge Rs 9,000/-
                            or US$ 150 per static page. You need to provide all content and images in one go. For every 
                            instance of conversation or meeting less than or equal to one hour our rate is US$ 10 or Rs 
                            700/- per instance. Any change in initial design would bear extra cost which will be quoted 
                            before incorporating such changes.
                    </p>
                    <p>
                        For dynamic web sites we give quotation of fixed price based on complexity and number of 
                        pages.
                    </p> 
                </div>
                <div className="section">
                    <strong>Hourly rate:</strong>
                    <p>
                        You can hire our engineer at hourly rate between US$ 10 – US$50 per hour. The rates vary 
                        based on technology stack and complexity.
                    </p>
                </div>
            </div>
        </div>
    </Layout>
} 
export default Pricing;

