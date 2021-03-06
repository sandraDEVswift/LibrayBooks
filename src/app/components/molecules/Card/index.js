import React from "react";
import { CardHeader, BadgeLabel } from './CardHeader'
import { StyledCard } from './styles'

const Card = ({ children }) => (
    <StyledCard margin="20" className="card card-body">
        <div className="row">
            {children}
        </div>
    </StyledCard>
)
export { CardHeader, BadgeLabel }
export default Card;
