import React from "react";
import Layout from "../components/layout";
import { imageProcessor } from "../hooks/image-processor-hook";
import SEO from "../components/seo";
import seoJson from "../assets/seo.json";

const About = () => {
    const SushantImage = imageProcessor("sushant", "fixed");
    return <Layout>
        <SEO title="Kush Infotech About" description={seoJson["decription"]} keywords={seoJson["keywords"]} />
        <div className="about-container">
            <div className="left-inset-image">
                {SushantImage}
            </div>
            <div className="content">
                <p>
                    <strong>Kush Infotech</strong> was founded by Sushant Agrawal sometime in year 2005 as software 
                    development business. Sushant is B.Tech in computer science from B.I.T Mesra. We focus in area 
                    of full stack custom development.
                </p>
                <p>
                    In early days we worked in space of Financial accounting, Payroll, Asset and HR management, 
                    SharePoint document management and collaboration. Most of our projects in first five years were 
                    done using then prevalent tools and technologies like Powerbuilder, Sql Anywhere, Java and C#, 
                    WPF, ASP.NET, Windows Forms, Crystal Reports, Sql server and SharePoint web parts.
                </p>
                <p>
                    Sometime in year 2010 we expanded our focus towards web development but remained primarily 
                    in Microsoft technology stack. From 2013 onwards we opened for full stack open source web 
                    development incorporating HTML, CSS, JavaScript, ES6, React and Angular, Node.js and PostgreSql. 
                    In 2018 we extended our scope of work for Docker and cloud-based development.
                </p>
                <div className="header"> Target Client </div>
                <p>
                    We focus on catering to needs of small and medium businesses (SMB).
                </p>
                <div className="header"> Market Scenario </div>
                <p>
                    Traditionally so far good quality software development would cost high paid engineers, expensive 
                    infrastructure along with big investments in development tools. Hence the high-class software 
                    development work has been the monopoly business of large software companies employing several 
                    hundreds of software engineers at their payroll. These companies would have heavy overhead expenses 
                    for infrastructure, idle manpower, office, HR and marketing facilities and this high overhead 
                    expense would invariably be passed to their clients, thereby increasing the cost of development 
                    many folds. Hence the clients for such software would be generally large corporate houses who 
                    could afford the expensive software development costs of the said big software companies. Also 
                    there had been some dark side of software development in big software companies. Software 
                    development tools and technology were primarily proprietary and would not change over few years 
                    and would remain compatible with old versions. So, it was easy for a person to reach the peak 
                    level of learning in say 3 years of time. For that reason, aspiring software engineers would be 
                    indirectly forced to become managers after say 5 years of work for good carrier growth. As a 
                    result, the actual software development work would be done by engineers with experience level 
                    between 3-5 years.
                </p>
                <p>
                    Gradually the scene changed. Due to explosion in internet and availability of cost viable cloud 
                    and open source technology there is no need of heavy infrastructure cost for good quality software 
                    development. Most of the software tools used for software development are free of cost.  It is 
                    now possible to develop very high-quality software remotely by limited number of software engineers, 
                    who have acquired the knowledge and skillset in latest technology breakthroughs from internet by 
                    self-learning, without doing investments in expensive training and courses. Now the technology changes 
                    every 15 days and the new versions may not be compatible with old versions. The technology domain has 
                    become so vast that there is need for much higher level of experience and intelligence than what was 
                    required earlier. Now there is requirement for highly skilled, experienced and intelligent engineers 
                    for high quality software development. Intelligence is natural resource and there is always acute 
                    shortage of smartly intelligent software engineers which has become more prevalent in today’s 
                    cutting-edge technology world. The large software companies do not necessarily have intelligent 
                    people because of their age-old recruitment patterns. The result is that now small companies with 
                    smartly intelligent engineers at their disposal are now able to deliver quality software at 1/100 
                    of the cost being asked by large software companies. At the same time now, SMB’s have felt the 
                    requirement of using efficient software at affordable prices. The net result is huge ecosystem of 
                    SMB’s looking for delivery-oriented individuals or small companies to cater their needs.
                </p>

                <div className="header"> Our Modus Operandi </div>
                <p>
                    We expertise in open source web technology driven by React, Angular, HTML5, JavaScript, No-sql 
                    databases and PostgreSql, Sql server, Flutter and React native. We develop custom websites and web 
                    applications for businesses. Our solutions are cost effective since we do not have investments in 
                    heavy infrastructure and marketing efforts. We have highly intelligent and experienced workforce
                    at our disposal which is activated on demand.
                </p>
            </div>
        </div>
    </Layout>
}
export default About;