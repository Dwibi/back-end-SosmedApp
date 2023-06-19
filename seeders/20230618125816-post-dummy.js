"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Posts", [
      {
        user_id: 3,
        image_post:
          "https://akcdn.detik.net.id/visual/2021/01/12/nostalgia-sama-minuman-minuman-populer-dari-masa-ke-masa-yang-mana-favoritmu_11.jpeg?w=480&q=90",
        caption: "Hello post 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        image_post:
          "https://www.ruparupa.com/blog/wp-content/uploads/2021/12/Screen-Shot-2021-12-23-at-17.02.58.png",
        caption: "Hello post 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        image_post:
          "https://akcdn.detik.net.id/visual/2021/01/12/nostalgia-sama-minuman-minuman-populer-dari-masa-ke-masa-yang-mana-favoritmu_11.jpeg?w=480&q=90",
        caption: "Hello post 3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        image_post:
          "https://www.ruparupa.com/blog/wp-content/uploads/2021/12/Screen-Shot-2021-12-23-at-17.02.58.png",
        caption: "Hello post 4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        image_post:
          "https://akcdn.detik.net.id/visual/2021/01/12/nostalgia-sama-minuman-minuman-populer-dari-masa-ke-masa-yang-mana-favoritmu_11.jpeg?w=480&q=90",
        caption: "Hello post 5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        image_post:
          "https://www.ruparupa.com/blog/wp-content/uploads/2021/12/Screen-Shot-2021-12-23-at-17.02.58.png",
        caption: "Hello post 6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        image_post:
          "https://akcdn.detik.net.id/visual/2021/01/12/nostalgia-sama-minuman-minuman-populer-dari-masa-ke-masa-yang-mana-favoritmu_11.jpeg?w=480&q=90",
        caption: "Hello post 7",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        image_post:
          "https://www.ruparupa.com/blog/wp-content/uploads/2021/12/Screen-Shot-2021-12-23-at-17.02.58.png",
        caption: "Hello post 8",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        image_post:
          "https://akcdn.detik.net.id/visual/2021/01/12/nostalgia-sama-minuman-minuman-populer-dari-masa-ke-masa-yang-mana-favoritmu_11.jpeg?w=480&q=90",
        caption: "Hello post 9",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        image_post:
          "https://www.ruparupa.com/blog/wp-content/uploads/2021/12/Screen-Shot-2021-12-23-at-17.02.58.png",
        caption: "Hello post 10",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        image_post:
          "https://akcdn.detik.net.id/visual/2021/01/12/nostalgia-sama-minuman-minuman-populer-dari-masa-ke-masa-yang-mana-favoritmu_11.jpeg?w=480&q=90",
        caption: "Hello post 11",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        image_post:
          "https://www.ruparupa.com/blog/wp-content/uploads/2021/12/Screen-Shot-2021-12-23-at-17.02.58.png",
        caption: "Hello post 12",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        image_post:
          "https://akcdn.detik.net.id/visual/2021/01/12/nostalgia-sama-minuman-minuman-populer-dari-masa-ke-masa-yang-mana-favoritmu_11.jpeg?w=480&q=90",
        caption: "Hello post 13",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        image_post:
          "https://www.ruparupa.com/blog/wp-content/uploads/2021/12/Screen-Shot-2021-12-23-at-17.02.58.png",
        caption: "Hello post 14",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        image_post:
          "https://akcdn.detik.net.id/visual/2021/01/12/nostalgia-sama-minuman-minuman-populer-dari-masa-ke-masa-yang-mana-favoritmu_11.jpeg?w=480&q=90",
        caption: "Hello post 15",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        image_post:
          "https://www.ruparupa.com/blog/wp-content/uploads/2021/12/Screen-Shot-2021-12-23-at-17.02.58.png",
        caption: "Hello post 16",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        image_post:
          "https://akcdn.detik.net.id/visual/2021/01/12/nostalgia-sama-minuman-minuman-populer-dari-masa-ke-masa-yang-mana-favoritmu_11.jpeg?w=480&q=90",
        caption: "Hello post 17",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        image_post:
          "https://www.ruparupa.com/blog/wp-content/uploads/2021/12/Screen-Shot-2021-12-23-at-17.02.58.png",
        caption: "Hello post 18",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        image_post:
          "https://akcdn.detik.net.id/visual/2021/01/12/nostalgia-sama-minuman-minuman-populer-dari-masa-ke-masa-yang-mana-favoritmu_11.jpeg?w=480&q=90",
        caption: "Hello post 19",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        image_post:
          "https://www.ruparupa.com/blog/wp-content/uploads/2021/12/Screen-Shot-2021-12-23-at-17.02.58.png",
        caption: "Hello post 20",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
