
'use client'
import React from "react"
import styles from "../utils.module.css"
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Textarea } from "@nextui-org/react";

const Home = () => {
    return (
         <Textarea
      variant="bordered"
      labelPlacement="outside"
      placeholder="Enter your description"
      defaultValue="I am a full stack software engineer and corporate lawyer currently based out of bucolic Northeastern Pennsylvania. I create websites and iOS/Android mobile apps."
      validationState="invalid"
      className="max-w-xs"
      height = {100}
    />
  )
}

export default Home