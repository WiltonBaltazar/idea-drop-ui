import type { Idea } from "@/types";
import { Link } from "@tanstack/react-router";
import clsx from "clsx";

const IdeaCard = ({ idea, button = true }: { idea: Idea, button?: boolean }) => {
    const linkClasses = clsx({
        'text-blue-600 hover:underline mt-3': !button,
        'text-center mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition': button
    });
    return (
        <div className="border border-gray-300 rounded-lg shadow p-4 bg-white">
            <div>
                <h3 className="text-lg font-bold text-gray-900">{idea.title}</h3>
                <p className="text-gray-600 mb-2">{idea.summary}...</p>
            </div>

            <Link to={`/ideas/${idea._id}`} className={linkClasses}> {button ? 'View Idea' : ''}
                {!button ? 'Read more → ' : ''}
            </Link>
        </div>
    );
}

export default IdeaCard;