import React from "react";

export const projectDetailsConfig = {
    kyokushinDetails: () => kyokushinDetails,
    capitalDetails: () => capitalDetails,
    selfandbeyondDetails: () => selfandbeyondDetails,
    assetDetails: () => assetDetails,
    payrollDetails: () => payrollDetails,
    accountsDetails: () => accountsDetails,
    eshopDetails: () => eshopDetails,
    medicalDetails: () => medicalDetails,
    ornetDetails: () => ornetDetails
};

const kyokushinDetails =<div> 
                        <ul className="tech-details">
                            <li><strong>Technologies -</strong> Gatsby, React, GraphQL, HTML, SCSS</li>
                            <li><strong>Time -</strong> 1 weeks</li>
                            <li><strong>Team -</strong> 2 person</li>
                            <li><strong>Features -</strong> Fast loading, SEO compatable</li>
                        </ul>
                        <p className="text"> This site is an introductory static site for a Karate club imparting training in Kyokushin Karate.
                             The site shows how Kyokushin Karate came into existence, its motive, rules and regulations,
                             policies and its history. The site is full of image galleries and is technically very fast in loading
                             the images. The site is made using React.js technology with Gatsby framework.
                         </p>
                         </div>

const capitalDetails = <div> 
                        <ul className="tech-details">
                            <li><strong>Technologies -</strong> Gatsby, React, GraphQL, HTML, SCSS</li>
                            <li><strong>Time -</strong> 1 weeks</li>
                            <li><strong>Team -</strong> 2 person</li>
                            <li><strong>Features -</strong> Fast loading, SEO compatable</li>
                        </ul>
                        <p className="text"> The site is the official informative static web site of a retail company. It contains a fixed product
                           catalogue along with discount offers in the home page. Site is full of several image galleries, which load
                           at lightning speed, thanks to React Gatsby framework along with GraphQL technology.
                       </p>
                       </div>

const selfandbeyondDetails =<div> 
                            <ul className="tech-details">
                                <li><strong>Technologies -</strong> Angular 4, HTML, SCSS</li>
                                <li><strong>Time -</strong> 2 weeks</li>
                                <li><strong>Team -</strong> 2 person</li>
                                <li><strong>Features -</strong> Fast loading</li>
                            </ul> 
                            <p className="text"> This static site is about a psychotherapy Well Being Center. They conduct several classes on well-
                                 being and details of all such details appear on site. Several day-today events are also listed on
                                 the site. Multiple photo galleries are used through carousals. The site is created using Angular-4.
                             </p>
                             </div>

const assetDetails =<div> 
                    <ul className="tech-details">
                        <li><strong>Technologies -</strong> .NET, Silverlight, DevExpress, WCF, JQuery</li>
                        <li><strong>Database -</strong> SQL Server 2008 R2</li>
                        <li><strong>Time -</strong> 5 month</li>
                        <li><strong>Team -</strong> 4 person</li>
                        <li><strong>Features -</strong> Reliable, Friendly UI</li>
                    </ul>  
                    <p className="text"> This is a web application created using variety of Microsoft Technologies. A complete business of rentals
                        of computers, printers and laptops is run from this web application. This is a complete application for managing 
                        assets along with day-to-day transaction entries and business reports. Data is stored in Sql Server database.
                     </p>
                     </div>

const payrollDetails = <div> 
                        <ul className="tech-details">
                            <li><strong>Technologies -</strong> .NET, Silverlight, WCF</li>
                            <li><strong>Database -</strong> SQL Server 2008 R2</li>
                            <li><strong>Time -</strong> 3 month</li>
                            <li><strong>Team -</strong> 2 person</li>
                            <li><strong>Features -</strong> Reliable, Friendly UI</li>
                        </ul>
                        <p className="text"> This is a complete multi company payroll web application written in Microsoft ASP.net and Silverlight.</p>
                        </div>

const accountsDetails = <p> This is a complete financial accounting package consisting of accounts payable, accounts receivable, final
                            accounts, Expenses, Journals and contra entries. Software was developed using PowerBuilder and Sql
                            Anywhere.
                        </p>

const eshopDetails =<div> 
                    <ul className="tech-details">
                        <li><strong>Technologies -</strong> Angular 4, RxJs</li>
                        <li><strong>Database -</strong> PostgreSql</li>
                        <li><strong>Time -</strong> 1 month</li>
                        <li><strong>Team -</strong> 2 person</li>
                        <li><strong>Features -</strong> Fast Loading, Friendly UI</li>
                    </ul> 
                    <p className="text"> This is a demo application in Angular 6 and PostgreSql. This mimic an e-commerce application consisting
                         of display of products along with categories in a tree. You can drill down the product details, place the
                         orders through a shopping cart implementation along with many more features. Main attraction is
                         unlimited product displays in a web page along with their respective images and details.
                    </p>
                    </div>

const medicalDetails = <div> 
                        <ul className="tech-details">
                            <li><strong>Technologies -</strong> Angular 4, RxJs, D3.js, Node.js</li>
                            <li><strong>Time -</strong> 5 month</li>
                            <li><strong>Team -</strong> 8 person</li>
                            <li><strong>Features -</strong> Fast Loading, Friendly UI, Graphical Representation</li>
                        </ul> 
                        <p className="text"> This software was developed for a hospital in US to track the medicines administered on patients. The
                           solution is highly refractured due to confidentiality agreement. The software was made using Angular 4
                           and D3.js.
                        </p>
                        </div>

const ornetDetails = <div> 
                        <ul className="tech-details">
                            <li><strong>Technologies -</strong> React, RxJs</li>
                            <li><strong>Time -</strong> 1 month</li>
                            <li><strong>Team -</strong> 1 person</li>
                            <li><strong>Features -</strong> Fast Loading, Library</li>
                        </ul> 
                        <p className="text"> This is a productivity tool created in React.js. Ornate can generate on the fly dynamic data entry forms
                            from JSON objects. You can provide JSON objects to Ornate at run time and it will generate
                            corresponding data entry form along with all sort of validations. Main attraction is it can be used with
                            any library such as Material, Bootstrap and many more. Ornate allows unlimited level of nesting of
                            controls. Repeater controls able to create and remove form controls at run time using ‘+’ or ‘-‘symbols
                            are also available. You can also have unlimited level of nesting of repeater controls with Ornate. Ornate
                            is very useful when it is required to generate thousands of data entry forms at run time. On click of
                            Submit button, Ornate captures all data as JSON and submits it to server.
                        </p>
                     </div>