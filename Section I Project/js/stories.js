"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
      storyList = await StoryList.getStories();
      $storiesLoadingMsg.remove();

      putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

//function generateStoryMarkup(story) {
//      // console.debug("generateStoryMarkup", story);

//      /* If the user is logged in, add a favorite's star and a trash can next to each story */
//      const hostName = story.getHostName();
//      return $(`
//      <li id="${story.storyId}">
//        <a href="${story.url}" target="a_blank" class="story-link">
//          ${story.title}
//        </a>
//        <small class="story-hostname">(${hostName})</small>
//        <small class="story-author">by ${story.author}</small>
//        <small class="story-user">posted by ${story.username}</small>
//      </li>
//    `);
//}
/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
      storyList = await StoryList.getStories();
      $storiesLoadingMsg.remove();

      putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 * - showDeleteBtn: show delete button?
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story, showDeleteBtn = false) {
      // console.debug("generateStoryMarkup", story);

      const hostName = story.getHostName();

      const userLoggedIn = Boolean(currentUser);

      return $(`
          <li id="${story.storyId}">
            ${showDeleteBtn ? getDeleteBtnMarkup() : ""}
            ${userLoggedIn ? getStarMarkup(story, currentUser) : ""}
            <a href="${story.url}" target="a_blank" class="story-link">
              ${story.title}
            </a>
            <small class="story-hostname">(${hostName})</small>
            <small class="story-author">by ${story.author}</small>
            <small class="story-user">posted by ${story.username}</small>
          </li>
        `);
}

function getDeleteBtnMarkup() {
      return `<span class="trash-can">
            <i class="fas fa-trash-alt"></i>
          </span>`;
}

/** Make favorite/not-favorite stars using Font-Awesome */

function getStarMarkup(story, user) {
      const isFavorite = user.isFavorite(story);
      const starType = isFavorite ? "fas" : "far"; // fas = filled star, far = empty star
      return `<span class="star">
            <i class="${starType} fa-star"></i>
          </span>`;
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {

      $allStoriesList.empty();

      // loop through all of our stories and generate HTML for them
      for (let story of storyList.stories) {
            const $story = generateStoryMarkup(story);
            $allStoriesList.append($story);
      }

      $allStoriesList.show();
}



/* Create new story when add story form is submitted */
async function createStory(evt) {
      console.debug("createStory");

      evt.preventDefault();

      // call addStory() with form data and wait for response
      const author = $("#new-author").val();
      const title = $("#new-title").val();
      const url = $("#new-url").val();
      const username = currentUser.username;
      const formData = { title, url, author, username };

      const newStory = await storyList.addStory(currentUser, formData);
      console.log(newStory);

      // add new story to the page
      const $newStory = generateStoryMarkup(newStory);
      $allStoriesList.prepend($newStory);

      // Clean-up
      document.getElementById("add-story").reset();
      $addStory.hide();
      $allStoriesList.show();

}

$addStory.on("submit", createStory);


function putUserStoriesOnPage() {
      console.debug("putUserStoriesOnPage");

      $ownStories.empty();
      for (let story of currentUser.ownStories) {
            let $story = generateStoryMarkup(story, true);
            $ownStories.append($story);
      }


      $ownStories.show();
}



async function toggleStoryFavorite(evt) {
      /* favorite unfavorite a story by adding font-awesome star class */

      const $target = $(evt.target);
      const $itemToEdit = $target.closest("li");
      const storyId = $itemToEdit.attr("id");
      const storyToToggle = storyList.stories.find(s => s.storyId === storyId);

      if ($target.hasClass("fas")) {
            await currentUser.removeFavorite(storyToToggle);
            $target.closest("i").toggleClass("fas far");
      } else {
            await currentUser.addFavorite(storyToToggle);
            $target.closest("i").toggleClass("fas far");
      }
}

$storiesLists.on("click", ".star", toggleStoryFavorite);


function putFavoritesListOnPage() {
      console.debug("putFavoritesListOnPage");

      $favStories.empty();


      // loop through all of users favorites and generate HTML for them
      for (let story of currentUser.favorites) {
            const $story = generateStoryMarkup(story);
            $favStories.append($story);
      }


      $favStories.show();
}

/** Handle deleting a story. */

async function deleteStory(evt) {
      console.debug("deleteStory");

      const $itemToEdit = $(evt.target).closest("li");
      const storyId = $itemToEdit.attr("id");

      await storyList.removeStory(currentUser, storyId);

      putUserStoriesOnPage();
}

$ownStories.on("click", ".trash-can", deleteStory);