import React from "react";
import ProductCard from "./ProductCard";
import { SubTitle } from "../atoms/";

const EmptyResults = () => <SubTitle>No Results</SubTitle>;
const Library = ({ items }) => (
<div>
    {items && items.length ? (
        items.map((result, index)=> <ProductCard key={index} item={result} />)
    ) : (<EmptyResults />)}
</div>);
export default Library;