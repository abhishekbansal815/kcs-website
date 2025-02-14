"use client";

import React, { useContext, useEffect } from "react";
import LevelOnePageBuilder, { LevelOnePage } from "./Index";
import icons from "@/components/utils/Icons";
import { ColorContext } from "@/components/context";

// Example usage:
const securityPageData: LevelOnePage = {
  pageColor: {
    primaryText: "text-blue-light",
    cardText:
      "bg-clip-text text-transparent bg-gradient-to-r from-blue-light to-gradiant-security-start",
    primaryBackground: "bg-blue-light",
    primaryBorder: "border-blue-light",
    HprimaryBackground: "hover:bg-blue-light",
    AprimaryBackground: "active:bg-blue-light",
    primaryShadow: "primary-shadow1",
    // barColor: "bg-gradient-to-r from-white to-blue-light",
  },

  coverSection: {
    pageTitle: "CYBER SECURITY",
    pageDescription:
      "Katalyst Delivers A Comprehensive Suite Of Smart & Proactive IT Security Services For On-Premises And Cloud infrastructure",
    coverImage: "/services/security/on-premise-1.png",
    coverImageAlt: "IT Security Services",
    coverIcon: "/services/security/KCS Security.png",
    coverList: [
      {
        title: "On Premise",
        url: "/security/premise",
      },
      {
        title: "Cloud",
        url: "/security/cloud",
      },
      {
        title: "Hybrid",
        url: "/security/hybrid",
      },
      {
        title: "Compliance",
        url: "/security/compliance",
      },
    ],
  },
  midSection: {
    title:
      "Cyber-attacks are a very real danger to every business irrespective of their size, location or industry specialization. Reality is that any business could be vulnerable to attack from hackers or malicious software if your IT security practices are not up to date or standard.",
    description:
      "At Katalyst, we deliver comprehensive security solutions whilst maintaining cost effectiveness and simplicity of management to achieve your laid-out business outcomes.",
    image: "/services/security/security-page.png",
    imageAlt: "IT Security Services",
    li: [
      "Comprehensive IT security lifecycle services",
      "Technology-driven, scalable and highly automated",
    ],
  },
  SectionTabs: {
    "SECURITY-PRACTICE": {
      title: "SECURITY PRACTICE",
      description: (
        <div className=" space-y-4">
          <h4 className="text-left text-xl font-semibold text-white leading-relaxed">
            CONSULTING, STRATEGY, RISK & COMPLIANCE
          </h4>
          <p className="text-white leading-7">
            Our risk management and compliance consultants help organizations
            like yours:
          </p>
          <p className="text-white leading-7">
            We help you align and integrate key risk and performance indicators
            to business objectives so that risks can be managed in an agile
            manner. Foster cultures that factor in risk during all phases of
            product development. Develop proactive risk management and
            compliance solutions built on technology and data analytics
          </p>
        </div>
      ),
    },
    "SERVICES-OFFERING": {
      title: "SERVICES OFFERING",
      description: (
        <div className=" space-y-4">
          <h4 className="text-left text-xl font-semibold text-white leading-relaxed">
            TECHNICAL SECURITY ASSESSMENTS
          </h4>
          <p className="text-white leading-7">
            We offer IT security-as-a-service with Managed Security Services
            (MSS) that helps minimize risks, protect critical information and
            effectively reduce the cost and complexity of your security
            infrastructure.
          </p>
          <p className="text-white leading-7">
            With an end-to-end suite of fully managed IT security services,
            customers get a wide range of solutions that help improve their
            security posture.
          </p>
        </div>
      ),
    },
    "MANAGED-SECURITY-SERVICES": {
      title: "MANAGED SECURITY SERVICES",
      description: (
        <div className=" space-y-4">
          <p className="text-white leading-7">
            A security risk assessment identifies, assesses, and implements key
            security controls in applications.
          </p>
          <p className="text-white leading-7">
            Carrying out a risk assessment allows an organization to view the
            application portfolio holistically—from an attacker’s perspective.
            It supports managers in making informed resource allocation,
            tooling, and security control implementation decisions.
          </p>
        </div>
      ),
    },
    "SECURITY-AWARENESS-TRAINING": {
      title: "SECURITY AWARENESS & TRAINING",
      description: (
        <div className=" space-y-4">
          <p className="text-white leading-7">
            Training employees to recognize and respond to security threats
            requires much more than a technology solution. It requires a program
            that actually changes human behaviours across the organization.
          </p>
          <p className="text-white leading-7">
            KCS academy delivers the framework, roadmap and skills needed to
            develop, maintain and measure a security-driven business culture.
            Through hands-on instruction, interactive labs and exercises.
          </p>
        </div>
      ),
    },
  },

  enterpriseServices: {
    title:
      "Collaborating with industry leaders, our team of security experts offer a premier-grade, end-to-end service solutions but not limited to",
    leftServices: [
      { id: 1, name: "Identity & Access management (IAM)" },
      { id: 2, name: "Data Leakage Prevention / Management (DLP/DLM)" },
      { id: 3, name: "Endpoint Security (AV, HIPS, HIDS, HFW)" },
      {
        id: 4,
        name: "Network & Perimeter Security (FW, NIDS, NIPS, UTM, etc)",
      },
    ],

    rightServices: [
      { id: 7, name: "Email Security (spam filtering, phishing)" },
      {
        id: 8,
        name: "Cloud Protection / Compliance (WAF, CASB, DDoS protection, etc)",
      },
      { id: 9, name: "Mobile Device Management (MDM)" },
      { id: 10, name: "Data Backup (on-prem, Cloud, etc)" },
    ],
    barColor: "bg-gradient-to-r from-blue-light to-gradiant-security-start",
  },

  engagement: {
    steps: [
      {
        number: "01",
        title: "CONSOLIDATE",
        description:
          "Consolidate systems and applications to reduce operating expenses.",
        icon: icons.Consolidate,
      },
      {
        number: "02",
        title: "OPTIMIZE",
        description:
          "Tune and automate systems and applications to improve performance, scalability, and reliability.",
        icon: icons.Optimize,
      },
      {
        number: "03",
        title: "INNOVATE",
        description:
          "Deliver new applications and services rapidly to meet changing business needs.",
        icon: icons.Innovate,
      },
      {
        number: "04",
        title: "ACCELERATE",
        description:
          "Enable fast, secure, and integrated business environments.",
        icon: icons.Accelerate,
      },
    ],
  },
  iconSection: {
    coverList: [
      {
        url: "/security/premise",
        coverImage: "/services/security/premise.svg",
        coverImageAlt: "On Permise",
      },
      {
        url: "/security/cloud",
        coverImage: "/services/security/cloud.svg",
        coverImageAlt: "",
      },
      {
        url: "/security/hybrid",
        coverImage: "/services/security/hybrid.svg",
        coverImageAlt: "Hybrid",
      },
      {
        url: "/security/compliance",
        coverImage: "/services/security/compliance.svg",
        coverImageAlt: "Compliance",
      },
    ],
  },
};

const Security = () => {
  const colorContext = useContext(ColorContext);
  if (!colorContext) {
    throw new Error("ColorContext is null");
  }
  const { setLineColor } = colorContext;

  useEffect(() => {
    setLineColor(securityPageData.pageColor.primaryBorder);
  }, [setLineColor]);

  return <LevelOnePageBuilder pageData={securityPageData} />;
};

export default Security;
