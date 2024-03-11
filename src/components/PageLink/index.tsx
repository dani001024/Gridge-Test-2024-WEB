import React from "react";
import {Box} from './styled'
import { Link } from "react-router-dom";

interface PageLinkProps {
    messege : string,
    link : string,
    page : string
}

const PageLink = (props:PageLinkProps) =>{
    const {messege,link,page} = props;
    
    return (
      <>
        <Box>
            <div>{messege}</div>
            <Link to={`/${link}`}>{page}</Link>
        </Box>
      </>
    );
}

export default PageLink;