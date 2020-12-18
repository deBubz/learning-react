/* 
    basic layout file for thingy 
*/

import React from "react";
import { css } from "@emotion/react";
import { Link } from "gatsby";

import { rhythm } from "../utils/typography";

export default function Layout( {children} ) {

    return (
        <div css={css`
            margin: 0 auto;
            max-width: 700px;
            padding: ${rhythm(2)};
            padding-top: ${rhythm(1.5)};
        `}>
            <Link to={`/`}
                css={css`
                    margin-bottom: ${rhythm(2)};
                    display: inline-block;
                    font-style: normal;
                `}>
                <h3>Pandas Eating Lots</h3>
            </Link>
            <Link to={`about`}
                css={css`
                    float: right;
                `}>
                About
            </Link>

            {children}
        </div>
    )
}