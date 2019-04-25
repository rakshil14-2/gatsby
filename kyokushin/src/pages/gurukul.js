import React from "react";
import Layout from "../components/layout";
import ImageProcessor from "../components/image-processor";

export default () => (
    <Layout imageSource="prasenjitSaha">
      <div className="content-container">
        <div className="gurukul-inset-image-content">
            <ImageProcessor source="prasenjitSahaGurukul"></ImageProcessor>
        </div>
        <div className="body-content">
          <p>
            The teaching of Martial Arts has historically followed the cultural traditions of
            Teacher-Disciple Apprenticeship. Students are trained in a strictly hierarchical
            system by a Master-Instructor: Guru (Teacher) in Sanskrit, Hindi, Bengali,
            Telugu, Nepalese and Malay, Sensei in Japanese, Sabom-nim in Korean, Guro in
            Tagalog, Kalari Gurukkal or Kalari Asan in Malayalam; Asaan in Tamil; Achan
            in Thai; Sayain Burmese; Shifu (Pinyin, lit. Master/ father) in Mandarin.
            The instructor is expected to directly supervise their students’ training and
            the students are expected to memorize and recite as closely as possible the
            rules and basic training routines of the school.
          </p>
          <p>
            In the warrior Kshatriya caste of South Asia, martial traditions were studied
            as a part of the Dharma (duty) of the caste. The senior teachers were called
            Gurus and taught Martial Arts at the Gurukul (traditional school) to the
            shishyas (students). Thus theGurukul is like the traditional Japanese Dojo (hall
            of the way, a place where Martial Arts are practiced).
          </p>
          <p>
            Furthermore, the preservation of Martial Arts requires many years of teaching
            and learning at the hand of a good instructor, or Guru, to pass on the art even
            to a single generation. Given these circumstances, many Martial Arts from
            previous Eras have not been passed down to the following generation.
            Deviation from the traditional process has led to the degeneration of the noble
            heritage of Martial Arts. Therefore, it is our duty to maintain tradition and
            follow the ancient and time honored rules under the guidance of a good
            instructor in the traditional way of learning. This is our solemn pledge in the
            Kyokushin Karate Gurukul.
          </p>
        </div>
      </div>
    </Layout>
  )