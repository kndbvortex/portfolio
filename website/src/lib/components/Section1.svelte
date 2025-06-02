<script>
  const carData = [
    {
      id: 1,
      carName: "R8 GT",
      carBrand: "Audi",
      carImage:
        "https://www.wsupercars.com/thumbnails/Audi/2023-Audi-R8-Coupe-V10-GT-RWD-001.jpg"
    },
    {
      id: 2,
      carName: "Aventador Ultimae",
      carBrand: "Lamborghini",
      carImage:
        "https://www.wsupercars.com/thumbnails/Lamborghini/2022-Lamborghini-Aventador-LP780-4-Ultimae-Roadster-001.jpg"
    },
    {
      id: 3,
      carName: "M4 CS",
      carBrand: "BMW",
      carImage: "https://www.wsupercars.com/thumbnails/BMW/2025-BMW-M4-CS-001.jpg"
    },
    {
      id: 4,
      carName: "Droptail Arcadia",
      carBrand: "Rolls Royce",
      carImage:
        "https://www.wsupercars.com/wp-content/uploads/2024-Rolls-Royce-Droptail-Arcadia-001.jpg"
    },
    {
      id: 5,
      carName: "Vantage GT3",
      carBrand: "Austin Martin",
      carImage:
        "https://www.wsupercars.com/wp-content/uploads/2024-Aston-Martin-Vantage-GT3-001.jpg"
    },
    {
      id: 6,
      carName: "Vantage",
      carBrand: "Austin Martin",
      carImage:
        "https://www.wsupercars.com/wp-content/uploads/2025-Aston-Martin-Vantage-001.jpg"
    },
    {
      id: 7,
      carName: "Huracan",
      carBrand: "Lamborghini",
      carImage:
        "https://www.wsupercars.com/wp-content/uploads/2023-Lamborghini-Huracan-STO-SC-10-Anniversario-001.jpg"
    },
    {
      id: 8,
      carName: "911 GT3 R",
      carBrand: "Porsche",
      carImage:
        "https://www.wsupercars.com/wp-content/uploads/2023-Porsche-911-GT3-R-Rennsport-001.jpg"
    },
    {
      id: 9,
      carName: "Mustang GTD",
      carBrand: "Ford",
      carImage:
        "https://www.wsupercars.com/wp-content/uploads/2025-Ford-Mustang-GTD-001.jpg"
    },
    {
      id: 10,
      carName: "SC 63",
      carBrand: "Lamborghini",
      carImage:
        "https://www.wsupercars.com/wp-content/uploads/2024-Lamborghini-SC63-004.jpg"
    }
  ];
</script>

<div class="outterContainer">
  <div class="scrollWrapper">
    <div class="container">
      {#each carData as car}
        <img src={car.carImage} alt={car.carName} />
      {/each}
    </div>
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background-image: linear-gradient(to right, white, #ffedb5);
    overflow: hidden; /* Prevent body scroll if the content is larger */
  }

  /* Hide scrollbar for the scrollWrapper */
  .scrollWrapper::-webkit-scrollbar {
    display: none;
  }
  .scrollWrapper {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .outterContainer {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden; /* Ensures nothing spills out of the main view */
  }

  .scrollWrapper {
    width: 700px; /* This becomes the height after rotation */
    height: 400px; /* This becomes the width after rotation */
    overflow-x: auto; /* Allow horizontal scrolling on this wrapper */
    overflow-y: hidden; /* Prevent vertical scrolling on this wrapper */
    transform: rotate(90deg) translateX(100px); /* Adjust transform based on new understanding */
    /* The translateY was applied after rotation. We need to move it into the correct position.
       Since we're rotating 90deg, the X-axis becomes the Y-axis.
       A positive translateX moves it to the right on the original X-axis, which is down on the rotated Y-axis.
       A negative translateY moves it up on the original Y-axis, which is right on the rotated X-axis.
       Let's stick with translateX to move it away from the center.
    */
    transform-origin: center center; /* Ensure rotation is around the center */
  }

  .container {
    width: auto; /* Let content define width */
    height: 100%; /* Take full height of scrollWrapper (which is 400px after rotation) */
    display: flex;
    flex-direction: row; /* Change to row for horizontal layout */
    gap: 160px;
    padding: 0 100px; /* Adjust padding for horizontal layout */
    /* The elements inside are now effectively in a horizontal line */
    transform: rotate(-90deg) translateY(0); /* Counter-rotate images and bring them to baseline */
    transform-origin: 0 0; /* Important for counter-rotation to work correctly */
    white-space: nowrap; /* Prevent images from wrapping */
  }

  img {
    height: 400px; /* Set height to match the new container height */
    width: auto; /* Let width adjust proportionally */
    object-fit: cover;
    border-radius: 10px;
  }

  @media (max-width: 600px) {
    .scrollWrapper {
      width: 350px; /* New height for smaller screens */
      height: 350px; /* New width for smaller screens */
      transform: rotate(90deg) translateX(0px); /* Adjust transform for smaller screens */
    }

    .container {
      padding: 0 120px; /* Adjust padding for horizontal layout on smaller screens */
    }

    img {
      height: 350px; /* Adjust image height for smaller screens */
    }
  }
</style>