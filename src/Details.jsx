import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

const Details = () => {
    const {id} = useParams();
    const results = useQuery(["details", id], fetchPet)

    if(results.isLoading) {
        return (
            <div className="loading-pane">
                <h2 className="loader">🌀</h2>
            </div>
        );
    }

    // at this point we know there's data for details
    const pet = results.data.pets[0];

    return (
        <div className="details">
            <Carousel images={pet.images} />
            <div>
                <h1>{pet.name}</h1>
                <h2>
                    {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
                    <button>Adopt {pet.name}</button>
                    <p>{pet.description}</p>
                </h2>
            </div>
        </div>
    );
};

function DetailsErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <Details {...props}/>
        </ErrorBoundary>
    );
}

export default DetailsErrorBoundary;