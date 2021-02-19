import React from 'react';
import { TopAuthors, Baa, StepsPage, Keywords } from 'components/Links/CardMoreLinks/CardMoreLinks';

const cards = [
  {
    title: 'TOP Authors',
    hoverable: true,
    extra: TopAuthors,
    content: (
      <>
        <p>20 stories</p>
        <p>+counter</p>
      </>
    )
  },
  {
    title: 'Evergreen',
    hoverable: true,
    extra: Baa,
    content: (
      <>
        <p>20 stories</p>
        <p>+counter</p>
      </>
    )
  },
  //   {
  //     title: 'Featured TOP Stories',
  //     hoverable: true,
  //     extra: null,
  //     content: (
  //       <>
  //         <p>desc</p>
  //         <p>desc</p>
  //       </>
  //     )
  //   },
  //   {
  //     title: 'Managed Accounts',
  //     hoverable: true,
  //     extra: null,
  //     content: (
  //       <>
  //         <p>desc</p>
  //       </>
  //     )
  //   },
//   {
//     title: 'Stats',
//     hoverable: true,
//     extra: null,
//     content: (
//       <>
//         <p>desc</p>
//       </>
//     )
//   },
  {
    title: 'Edited Stories',
    hoverable: true,
    extra: null,
    content: (
      <>
        <p>desc</p>
      </>
    )
  },
//   {
//     title: 'Today Submined stories',
//     hoverable: true,
//     extra: null,
//     content: (
//       <>
//         <p>desc</p>
//       </>
//     )
//   },
//   {
//     title: 'Search',
//     hoverable: true,
//     extra: null,
//     content: (
//       <>
//         <p>desc</p>
//       </>
//     )
//   },
//   {
//     title: 'Published Stories',
//     hoverable: true,
//     extra: null,
//     content: (
//       <>
//         <p>desc</p>
//       </>
//     )
//   },
//   {
//     title: 'Reports',
//     hoverable: true,
//     extra: null,
//     content: (
//       <>
//         <p>desc</p>
//       </>
//     )
//   },
  {
    title: 'Steps',
    hoverable: true,
    extra: StepsPage,
    content: (
      <>
        <p>20 stories</p>
        <p>+counter</p>
      </>
    )
  },
  {
    title: 'Keywords',
    hoverable: true,
    extra: Keywords,
    content: (
      <>
        <p>20 stories</p>
        <p>+counter</p>
      </>
    )
  }
];

export { cards };
