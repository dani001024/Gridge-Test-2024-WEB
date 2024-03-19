import React from "react"
import { Box ,Pre} from "./styles";
interface ContentTextProps {
    feedLoginId: string;
    feedText: string;
    showMore : boolean
}

const ContentText: React.FC<ContentTextProps> = ({ feedLoginId, feedText,showMore }) => {
    return(<>
    <Box showMore={showMore}>
        <Pre>{feedLoginId}{feedText}</Pre>
    </Box>
    </>)
}

export default ContentText;