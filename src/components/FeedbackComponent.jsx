import { Avatar, Blockquote, Rating } from "flowbite-react";
import FeedbackData from "../data/FeedbackData.json";
import { Carousel } from "flowbite-react";

const FeedbackComponent = () => {
  return (
    <div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={2000} >
        {FeedbackData.map((data) => {
        return (
          <figure className="max-w-screen-md">
            <div className="mb-4 flex items-center">
              <Rating size="md">
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
              </Rating>
            </div>
            <Blockquote>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                {data?.text ||
                  "Your skin feels like it’s sipping a refreshing cocktail when using Carrot & Stick’s moisturizer. The blend of naturally sourced ingredients like jojoba seed oil and hyaluronic acid is a game-changer! 🌿🌟"}
              </p>
            </Blockquote>
            <figcaption className="mt-6 flex items-center space-x-3">
              <Avatar
                rounded
                size="xs"
                img={data.image}
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                  {data.name}
                </cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                  <span>ID: </span>
                  {data.code}
                </cite>
              </div>
            </figcaption>
          </figure>
        );
      })}
        </Carousel>
      </div>
      
    </div>
  );
};

export default FeedbackComponent;
