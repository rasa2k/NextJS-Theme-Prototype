import { Button } from "@mui/material";
import Link from "next/link";

function TopNavigation() {
  return (
    <>
      <Link href="/" passHref>
        <Button color="secondary" href="#text-buttons">
          Home
        </Button>
      </Link>
      <Link href="/icons" passHref>
        <Button color="secondary" href="#text-buttons">
          Icons
        </Button>
      </Link>
      <Link href="/colors" passHref>
        <Button color="secondary" href="#text-buttons">
          Colors
        </Button>
      </Link>
      <Link href="/buttons" passHref>
        <Button color="secondary" href="#text-buttons">
          Buttons
        </Button>
      </Link>
      <Link href="/panels" passHref>
        <Button color="secondary" href="#text-buttons">
          Panels
        </Button>
      </Link>
      <Link href="/typography" passHref>
        <Button color="secondary" href="#text-buttons">
          Typography
        </Button>
      </Link>
      <Link href="/highcharts" passHref>
        <Button color="secondary" href="#text-buttons">
          Highcharts
        </Button>
      </Link>
    </>
  );
}

export default TopNavigation;
