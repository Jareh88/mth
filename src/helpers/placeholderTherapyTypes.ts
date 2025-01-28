const placeholderTherapyTypes = [
  {
    parent: {
      label: "Accelerated experiential dynamic psychotherapy (AEDP)",
      id: "Accelerated experiential dynamic psychotherapy (AEDP)",
    },
  },
  {
    parent: {
      label: "Cognitive and behavioural therapies",
      id: "Cognitive and behavioural therapies",
    },
    children: [
      {
        label: "Acceptance and commitment therapy (ACT)",
        id: "Acceptance and commitment therapy (ACT)",
      },
      {
        label: "Behavioural therapy",
        id: "Behavioural therapy",
      },
      {
        label: "Cognitive analytic therapy (CAT)",
        id: "Cognitive analytic therapy (CAT)",
      },
      {
        label: "Cognitive behavioural therapy (CBT)",
        id: "Cognitive behavioural therapy (CBT)",
      },
      {
        label: "Cognitive processing therapy (CPT)",
        id: "Cognitive processing therapy (CPT)",
      },
      {
        label: "Cognitive stimulation therapy",
        id: "Cognitive stimulation therapy",
      },
      {
        label: "Cognitive therapy",
        id: "Cognitive therapy",
      },
      {
        label: "Dialectical behavioural therapy (DBT)",
        id: "Dialectical behavioural therapy (DBT)",
      },
      {
        label: "Prolonged exposure therapy (PET)",
        id: "Prolonged exposure therapy (PET)",
      },
      {
        label: "Rational emotive behaviour therapy (REBT)",
        id: "Rational emotive behaviour therapy (REBT)",
      },
      {
        label: "Social recovery therapy",
        id: "Social recovery therapy",
      },
      {
        label: "Trauma-focused CBT",
        id: "Trauma-focused CBT",
      },
    ],
  },
  {
    parent: {
      label: "Adlerian therapy",
      id: "Adlerian therapy",
    },
  },

  {
    parent: {
      label: "Ecotherapy",
      id: "Ecotherapy",
    },
    children: [
      {
        label: "Animal-assisted therapy",
        id: "Animal-assisted therapy",
      },
      {
        label: "Equine therapy",
        id: "Equine therapy",
      },
      {
        label: "Walk and talk therapy",
        id: "Walk and talk therapy",
      },
    ],
  },

  {
    parent: {
      label: "Applied psychology",
      id: "Applied psychology",
    },
  },

  {
    parent: {
      label: "Creative therapies",
      id: "Creative therapies",
    },
    children: [
      {
        label: "Art therapy",
        id: "Art therapy",
      },
      {
        label: "Bibliotherapy",
        id: "Bibliotherapy",
      },
      {
        label: "Dance therapy",
        id: "Dance therapy",
      },
    ],
  },

  {
    parent: {
      label: "Family therapy",
      id: "Family therapy",
    },
    children: [
      {
        label: "Attachment-based therapy",
        id: "Attachment-based therapy",
      },
      {
        label: "Structural family therapy",
        id: "Structural family therapy",
      },
    ],
  },

  {
    parent: {
      label: "Other therapies",
      id: "Other therapies",
    },
    children: [
      {
        label: "Coaching",
        id: "Coaching",
      },
      {
        label: "Compassion-focused therapy",
        id: "Compassion-focused therapy",
      },
      {
        label: "Hypnotherapy",
        id: "Hypnotherapy",
      },
      {
        label: "Integrative counselling",
        id: "Integrative counselling",
      },
      {
        label: "Interpersonal therapy",
        id: "Interpersonal therapy",
      },
      {
        label: "Mindfulness",
        id: "Mindfulness",
      },
      {
        label: "Psychosexual therapy",
        id: "Psychosexual therapy",
      },
      {
        label: "Schema therapy",
        id: "Schema therapy",
      },
    ],
  },
  {
    parent: {
      label: "Core process psychotherapy",
      id: "Core process psychotherapy",
    },
  },

  {
    parent: {
      label: "Couples therapy",
      id: "Couples therapy",
    },
    children: [
      {
        label: "Emotionally focused couple therapy (EFT)",
        id: "Emotionally focused couple therapy (EFT)",
      },
      {
        label: "Imago relationship therapy (IRT)",
        id: "Imago relationship therapy (IRT)",
      },
      {
        label: "The Gottman Method",
        id: "The Gottman Method",
      },
    ],
  },

  {
    parent: {
      label: "Psychoanalytical and psychodynamic therapies",
      id: "Psychoanalytical and psychodynamic therapies",
    },
    children: [
      {
        label: "Dynamic interpersonal therapy",
        id: "Dynamic interpersonal therapy",
      },
      {
        label: "Jungian therapy",
        id: "Jungian therapy",
      },
      {
        label: "Psychoanalysis",
        id: "Psychoanalysis",
      },
      {
        label: "Psychoanalytic therapy",
        id: "Psychoanalytic therapy",
      },
      {
        label: "Psychodynamic therapy",
        id: "Psychodynamic therapy",
      },
    ],
  },

  {
    parent: {
      label: "Eclectic counselling",
      id: "Eclectic counselling",
    },
  },

  {
    parent: {
      label: "EMDR",
      id: "EMDR",
    },
  },

  {
    parent: {
      label: "Humanistic therapies",
      id: "Humanistic therapies",
    },
    children: [
      {
        label: "Emotion-focused therapy",
        id: "Emotion-focused therapy",
      },
      {
        label: "Existential therapy",
        id: "Existential therapy",
      },
      {
        label: "Gestalt therapy",
        id: "Gestalt therapy",
      },
      {
        label: "Human Givens psychotherapy",
        id: "Human Givens psychotherapy",
      },
      {
        label: "Motivational interviewing (MI)",
        id: "Motivational interviewing (MI)",
      },
      {
        label: "Person-centred therapy",
        id: "Person-centred therapy",
      },
      {
        label: "Psychosynthesis",
        id: "Psychosynthesis",
      },
      {
        label: "Reality therapy",
        id: "Reality therapy",
      },
      {
        label: "Solution focused brief therapy",
        id: "Solution focused brief therapy",
      },
      {
        label: "Strength-based therapy",
        id: "Strength-based therapy",
      },
      {
        label: "Transactional analysis",
        id: "Transactional analysis",
      },
      {
        label: "Transpersonal psychology",
        id: "Transpersonal psychology",
      },
    ],
  },

  {
    parent: {
      label: "Somatic therapy",
      id: "Somatic therapy",
    },
    children: [
      {
        label: "Emotional freedom technique (EFT)",
        id: "Emotional freedom technique (EFT)",
      },
    ],
  },

  {
    parent: {
      label: "Experiential therapy",
      id: "Experiential therapy",
    },
  },

  {
    parent: {
      label: "Exposure and response prevention (ERP)",
      id: "Exposure and response prevention (ERP)",
    },
  },

  {
    parent: {
      label: "Group therapy",
      id: "Group therapy",
    },
    children: [
      {
        label: "Psychodrama",
        id: "Psychodrama",
      },
    ],
  },

  {
    parent: {
      label: "Intercultural therapy",
      id: "Intercultural therapy",
    },
  },
  {
    parent: {
      label: "Internal family systems therapy (IFS)",
      id: "Internal family systems therapy (IFS)",
    },
  },
  {
    parent: {
      label: "Mentalisation-based therapy",
      id: "Mentalisation-based therapy",
    },
  },

  {
    parent: {
      label: "Narrative therapy}",
      id: "Narrative therapy}",
    },
  },
  {
    parent: {
      label: "Neuro-linguistic programming (NLP)",
      id: "Neuro-linguistic programming (NLP)",
    },
  },
  {
    parent: {
      label: "Neurofeedback",
      id: "Neurofeedback",
    },
  },
  {
    parent: {
      label: "Positive psychology",
      id: "Positive psychology",
    },
  },
  {
    parent: {
      label: "Relational therapy",
      id: "Relational therapy",
    },
  },
  {
    parent: {
      label: "Systemic therapy",
      id: "Systemic therapy",
    },
  },
];

export default placeholderTherapyTypes;
