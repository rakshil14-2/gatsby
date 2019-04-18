import React from "react";
import footerStyles from './footer.module.scss';
import { StaticQuery, graphql } from "gatsby";

export default () => (
    <div className={footerStyles.footerContainer}>
        <div className={footerStyles.footerContent}>
            <span>&copy;</span> 
                <StaticQuery
                query={graphql`
                    query SiteAuthorQuery {
                        site {
                        siteMetadata {
                            author
                        }
                    }
                    }
                `}
                render={data =>(<> {data.site.siteMetadata.author} </>)} />
        </div>
    </div>
)