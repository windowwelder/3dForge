import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import Pill from "@/app/components/Pill";
import { ModelCardProps } from "@/app/types";
import placeholderImg from "@/public/placeholder.png";

export default function ModelCard({ model }: ModelCardProps) {
    return (
        <Link
            href={`/3d-models/${model.id}`}
            aria-labelledby={`model-${model.id}-title`}
        >
            <div role="article">
                <div>
                    <img
                        src={placeholderImg.src}
                        alt={model.name}
                    />
                </div>
                <div>
                    <div>
                        <h2 id={`model-${model.id}-title`}>
                            {model.name}
                        </h2>
                    </div>
                    <p>
                        {model.description}
                    </p>
                    <div>
                        <Pill>{model.category}</Pill>
                    </div>
                    <div aria-label={`${model.likes} likes`}>
                        <FaRegHeart aria-hidden="true" />
                        <span>{model.likes}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
