'use client'
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import styles from "../utils.module.css"
import React from 'react';
import { ReactDOM } from "react";
import ReactPDF from "@react-pdf/renderer";
import { PDFViewer } from '@react-pdf/renderer';
import { Document, Page } from 'react-pdf';

const pdfURL = '../public/sample.pdf';

const Resume = () => {
    
    return (
        <div className = {styles.resumeContainer}>
            <div className = {styles.resumePage}>
            <object data="/TomMeehanResume.pdf" type="application/pdf" width="100%" height="98%">
                <a href="/TomMeehanResume.pdf"> Download my resume</a>
            </object>
            </div>
        </div>
    );
};

export default Resume;