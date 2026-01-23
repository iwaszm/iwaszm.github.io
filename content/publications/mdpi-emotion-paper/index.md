---
title: "Bringing Emotion Theory into the Cockpit"
authors:
- admin
author_notes:
- ""
- ""
date: "2023-11-19T00:00:00Z"

# Schedule page publish date (NOT publication's date).
publishDate: "2023-11-19T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.

abstract: 

# Summary. An optional shortened abstract.
summary: Physiological and facial indicators of novelty appraisal were linked to the feeling of risk in vehicle occupants, providing insights for developing affect-aware systems that help maintain trust in automated vehicles.

tags:
- in-vehicle emotions
featured: true

links:
  - type: pdf
    url: https://www.mdpi.com/1660-4601/19/21/14259

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Image credit: [**unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

<div class="text-base text-justify">

---

### Background

For nearly a century, the scientific debate on emotion has revolved around two fascinating puzzles. First, the nature of emotion: Are joy and sadness distinct entities, like apples and pears, or merely different shades of the same fruit, like red and green apples? Second, the sequence: Do we run because we feel fear, or do we feel fear because we are running? While the academic community has yet to reach a verdict on these theoretical roots, there is one consensus: to truly understand human emotion, we cannot rely on a single source. It requires multimodal measurement, combining physiological signals, facial expressions, and behavioral data.

This principle is now reshaping the automotive world. From enhancing the **passenger's well-being** to solving the complex puzzle of **trust in autonomous vehicles**, accurate emotion detection is key. Motivated by this, I had the privilege during the early stages of my PhD to independently design and execute a comprehensive multimodal driving simulator experiment, aiming to bridge the gap between abstract theory and real-world application


<figure class="w-full my-6 flex flex-col items-center"> 
  <img src="workflow.svg" alt="Research Framework Diagram">
  
  <figcaption class="figure-caption">
    <strong>Figure 1. The Research Workflow.</strong>
  </figcaption>
</figure>


---
### Hypotheses
Drawing upon the *Component Process Model (CPM)*, the driver's body responses during fear-inducing scenarios would be modulated by specific cognitive appraisals: Novelty and Power. It's hypothesized that these cognitive checks manifest through distinct channels:

1. The Novelty Hypothesis: The appraisal of Novelty (high unexpectedness) will be indicated by immediate responses, specifically an increase in Pupil Diameter, Skin Conductance Level, and the activation of Upper Face Action Units.
2. The Power Hypothesis: The appraisal of Power (low coping potential/control) will be indicated by a delayed response pattern, specifically an drop in nasal temperature and the activation of Lower Face Action Units.
3. The Temporal Dynamics Hypothesis: In line with the sequential nature of CPM checks, the facical indicators of Novelty are hypothesized to precede the ones of Power, reflecting the cognitive processing order from event detection to coping evaluation.

---
### Methods
Driving simulator experiments were conducted using Virtual Reality to elicit fear through critical traffic events. Adopting a mixed-methods design, the study integrated objective physiological measurements with subjective assessments. The objective data comprised facial infrared thermography, facial Action Units (AUs), and synchronized peripheral physiological signals. These objective metrics were valided with subjective data collected via the Self-Assessment Manikin (SAM) and the Positive and Negative Affect Schedule (PANAS). This comprehensive approach allowed for the cross-validation of appraisal-driven responses, establishing a robust, multidimensional framework for assessing driver emotions.

<figure class="figure-container">
  <img src="figure1.png">
  
  <figcaption class="figure-caption">
    <strong>Figure 2. Overview of the multi-sensor experimental setup.</strong><br>
    The diagram shows the integration of physiological, behavioral, and subjective measurement tools within the simulated driving environment (This image is generated by AI).
  </figcaption>
</figure>

<figure class="w-full my-6 flex flex-col items-center"> 
    <iframe src="AU.html"
            class="w-full h-[520px] rounded-xl border border-gray-200 shadow-sm bg-white"
            loading="lazy" 
            allowfullscreen>
    </iframe>
    <figcaption class="figure-caption">
        <strong>Figure 3.</strong> Mapping of Facial Action Units (AUs) to basic emotion categories.
    </figcaption>
</figure>
        
---

### Key Findings
1. The studies empirically validated the Component Process Model (CPM) as a robust framework for assessing driver emotions. 
2. Thermal Imaging as an indicator for "Power" 
   - Fear (characterized by low power or low coping potential) was significantly associated with a decrease in nasal tip temperature (vasoconstriction), effectively distinguishing it from high-power emotions.
3. Distinct Facial Signatures for Appraisals
   - Novelty: Associated with upper face activation (AUs 1, 2, 4, 5, 7).
   - Power: Associated with lower face activation (AUs 15, 20, 25, 26).
   - Temporal Dynamics: Indicators of Novelty precede those of Power, reflecting the cognitive processing order from event detection to coping evaluation.
4. Multimodal Synchronization & Latency
   - A decrease in Novelty (habituation) significantly correlated with reductions in Pupil Diameter (PD), Skin Conductance Level (SCL), and AU intensity.
   - Response Latency: Revealed distinct peak timings for different modalities, with Pupil Diameter peaking earliest (~3.2s), followed by Skin Conductance (~4.1s) and Facial Expressions (~4.3s), and finally Heart Rate (~5.0s).

---


</div>