# Matan Ben Yosef

London, UK · [matanb.dev](https://matanb.dev/) · <hi@matanb.dev>

Generative-AI researcher and engineer at LTX (Lightricks). I enjoy working the
entire stack, from early research and model training to inference optimization and
the integration in products people actually use.

Also published as **Matan Ben-Yosef**. ORCID [0009-0002-5436-9519](https://orcid.org/0009-0002-5436-9519).

[GitHub](https://github.com/matanby) ·
[Google Scholar](https://scholar.google.com/citations?user=JfsnSLIAAAAJ&hl=en) ·
[LinkedIn](https://www.linkedin.com/in/matanby) ·
[Hugging Face](https://huggingface.co/matanby)

## About

I'm a generative-AI researcher and engineer at LTX, Lightricks' video model team. I work
on post-training, which mostly means taking a base video model and making it directable:
control adapters, IC-LoRAs, and a lot of performance work on the training stack. I
designed and built the
[LTX Trainer](https://github.com/Lightricks/LTX-2/tree/main/packages/ltx-trainer) from
scratch: the open-source trainer that ships with LTX-2, and what the community uses to
fine-tune it. Earlier at Lightricks I built LoRA training infrastructure for SD and Flux,
and the backend of a text-to-image product serving millions.

The research side of my work has followed one arc for a decade: generative models of
people, from GANs to video diffusion. It started with my MSc at the Hebrew University of
Jerusalem (2015–2018), on multi-modal GANs with Daphna Weinshall. I was at D-ID from 2018
to late 2021, ending as lead deep-learning and computer-vision researcher, where I built
the face-animation models behind Live Portraits and AI Avatars and worked on adversarial
face de-identification.

After D-ID I built FaceFX on my own: an iOS and Android app with around fifty face
effects, each one its own GAN, served from GPU nodes on GCP, down to the ads and the
subscriptions. Lightricks acquired it in mid-2022, and that is how I ended up here.

Before AI I spent about a decade as a software engineer, mostly on real-time and
distributed systems. I've been writing code since I was ten, and I still care most about
the same thing: simple, well-designed software.

## Publications

### AVControl: Efficient Framework for Training Audio-Visual Controls

**Matan Ben-Yosef**, Tavi Halperin, Naomi Ken Korem, Mohammad Salama, Harel Cain, Asaf
Joseph, Anthony Chen, Urska Jelercic, Ofir Bibi. arXiv preprint, 2026.
[arXiv](https://arxiv.org/abs/2603.24793) ·
[Project](https://matanby.github.io/AVControl/)

### JUST-DUB-IT: Video Dubbing via Joint Audio-Visual Diffusion

Anthony Chen, Naomi Ken Korem, Gal Zeevi, Tavi Halperin, **Matan Ben Yosef**, Urska
Jelercic, Ofir Bibi, Or Patashnik, Daniel Cohen-Or. SIGGRAPH 2026.
[arXiv](https://arxiv.org/abs/2601.22143) · [Project](https://justdubit.github.io/)

### LumiVid: HDR Video Generation via Latent Alignment with Logarithmic Encoding

Naomi Ken Korem, Mohamed Oumoumad, Harel Cain, **Matan Ben Yosef**, Urska Jelercic, Ofir
Bibi, Yaron Inger, Or Patashnik, Daniel Cohen-Or. arXiv preprint, 2026.
[arXiv](https://arxiv.org/abs/2604.11788) · [Project](https://hdr-lumivid.github.io/)

### LoRA Training for Text-to-Video Models: A Practical Guide to Fine-Tuning SOTA Video Generation

Naomi Ken Korem, **Matan Ben Yosef**, Tavi Halperin, Ofir Bibi. SIGGRAPH Asia 2025.
[ACM](https://dl.acm.org/doi/full/10.1145/3757371.3763260) (DOI 10.1145/3757371.3763260)

### Gaussian Mixture Generative Adversarial Networks for Diverse Datasets, and the Unsupervised Clustering of Images

**Matan Ben-Yosef**, Daphna Weinshall. arXiv preprint, 2018.
[arXiv](https://arxiv.org/abs/1808.10356)

### Multi-Modal Generative Adversarial Networks

**Matan Ben-Yosef**. MSc thesis, Hebrew University of Jerusalem, 2018.
[PDF](https://www.cs.huji.ac.il/w~daphna/theses/Matan_BenYosef_2018.pdf)

## Open source

One production training system, and two command-line tools I built because I kept
needing them.

### [ltx-trainer](https://github.com/Lightricks/LTX-2/tree/main/packages/ltx-trainer)

The open-source trainer for LTX-2, designed and built from scratch. It ships inside the
model repo, 8.4k stars, and it is what the community uses to fine-tune the model.

### [sft-cli](https://github.com/matanby/sft-cli)

Inspect, diff and edit `.safetensors` checkpoints, plus a full LoRA toolkit: extract an
adapter from a fine-tune, resize its rank from the singular-value spectrum, convert
between Kohya and PEFT. It also ships a skill for coding agents.

```
uv tool install sft-cli
```

### [vidio](https://github.com/matanby/vidio)

ffmpeg without the flags: trim, crop, concatenate, convert, and build grids.

```
uv tool install vidio-cli
```

## Patents

Co-inventor on eight patents from my years at D-ID, in synthetic-media animation,
anonymization, and face recognition.

**Animation and reenactment**

- [A System and Method for Voice-Driven Lip Syncing and Head Reenactment](https://patents.google.com/patent/US11461948B2) — US 11,461,948 · 2022
- [System and Method for Artificial Neural-Network-Based Animation with Three-Dimensional Rendering](https://patents.google.com/patent/US11436781B2) — US 11,436,781 · 2022
- [System and a Method for Artificial Neural-Network Based Animation](https://patents.google.com/patent/US11276214B2) — US 11,276,214 · 2022

**Anonymization and identity**

- [Facial Anonymization with Consistent Facial Attribute Preservation in Video](https://patents.google.com/patent/US11526626B2) — US 11,526,626 · 2022
- [System and Method for Performing Facial Image Anonymization](https://patents.google.com/patent/US12159334B2) — US 12,159,334 · 2024
- [System and Method for Image De-Identification to Humans While Remaining Recognizable by Machines](https://patents.google.com/patent/US12387459B2) — US 12,387,459 · 2025
- [System and Method for Performing Face Recognition](https://patents.google.com/patent/US12450942B2) — US 12,450,942 · 2025
- [System and Method for Reconstruction of Faces from Anonymized Media Using Neural Network Based Steganography](https://patents.google.com/patent/US12505251B2) — US 12,505,251 · 2025

---

Happy to talk about video generation, training infrastructure, or anything adjacent.
