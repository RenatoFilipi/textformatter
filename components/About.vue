<template>
  <div class="block">
    <div class="flex flex-col m-12 lg:m-24">
      <h2 class="font-qs text-gray-800 font-bold text-5xl mb-16">About</h2>
      <div class="flex flex-col gap-12 divide-y-2">
        <div>
          <h3 class="font-qs text-gray-800 font-bold text-3xl mb-8">
            Text Formatter
          </h3>
          <div class="flex flex-col gap-3">
            <p class="font-qs text-gray-800 font-medium text-lg text-justify">
              This Text Formatter is a online text formatting tool that can
              format the given text. Currently suports: Uppercase all the given
              text, Lowercase all the given text, Capitalize the sentence and
              Capitalize the words from the given text.
            </p>
          </div>
        </div>
        <div class="pt-12 flex gap-3 flex-col">
          <h3 class="font-qs text-gray-800 font-bold text-3xl mb-8">
            Examples
          </h3>
          <div class="flex gap-5 flex-wrap">
            <div class="bg-white overflow-hidden border border-gray-200 p-3">
              <div class="m-2 text-justify text-sm font-qs">
                <h2 class="font-bold text-lg h-2 mb-8">Uppercase all</h2>
                <p class="text-sm">
                  LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND
                  TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S
                  STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN
                  PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE
                  SPECIMEN BOOK. IT HAS SURVIVED NOT ONLY FIVE CENTURIES, BUT
                  ALSO THE LEAP INTO ELECTRONIC TYPESETTING, REMAINING
                  ESSENTIALLY UNCHANGED. IT WAS POPULARISED IN THE 1960S WITH
                  THE RELEASE OF LETRASET SHEETS CONTAINING LOREM IPSUM
                  PASSAGES, AND MORE RECENTLY WITH DESKTOP PUBLISHING SOFTWARE
                  LIKE ALDUS PAGEMAKER INCLUDING VERSIONS OF LOREM IPSUM.
                </p>
              </div>
            </div>
            <div class="bg-white overflow-hidden border border-gray-200 p-3">
              <div class="m-2 text-justify text-sm font-qs">
                <h2 class="font-bold text-lg h-2 mb-8">Lowercase all</h2>
                <p class="text-sm">
                  lorem ipsum is simply dummy text of the printing and
                  typesetting industry. lorem ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. it has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. it was popularised in the 1960s with
                  the release of letraset sheets containing lorem ipsum
                  passages, and more recently with desktop publishing software
                  like aldus pagemaker including versions of lorem ipsum.
                </p>
              </div>
            </div>
            <div class="bg-white overflow-hidden border border-gray-200 p-3">
              <div class="m-2 text-justify text-sm font-qs">
                <h2 class="font-bold text-lg h-2 mb-8">Capitalize sentence</h2>
                <p class="text-sm">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. lorem ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. it has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. it was popularised in the 1960s with
                  the release of letraset sheets containing lorem ipsum
                  passages, and more recently with desktop publishing software
                  like aldus pagemaker including versions of lorem ipsum.
                </p>
              </div>
            </div>
            <div class="bg-white overflow-hidden border border-gray-200 p-3">
              <div class="m-2 text-justify text-sm font-qs">
                <h2 class="font-bold text-lg h-2 mb-8">Capitalize words</h2>
                <p class="text-sm">
                  Lorem Ipsum Is Simply Dummy Text Of The Printing And
                  Typesetting Industry. Lorem Ipsum Has Been The Industry's
                  Standard Dummy Text Ever Since The 1500s, When An Unknown
                  Printer Took A Galley Of Type And Scrambled It To Make A Type
                  Specimen Book. It Has Survived Not Only Five Centuries, But
                  Also The Leap Into Electronic Typesetting, Remaining
                  Essentially Unchanged. It Was Popularised In The 1960s With
                  The Release Of Letraset Sheets Containing Lorem Ipsum
                  Passages, And More Recently With Desktop Publishing Software
                  Like Aldus Pagemaker Including Versions Of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="pt-12 flex gap-3 flex-col">
          <h3 class="font-qs text-gray-800 font-bold text-3xl mb-8">
            Letter case
          </h3>
          <div class="flex gap-5 flex-wrap">
            <div class="flex flex-col gap-3 text-justify">
              <p class="font-qs text-gray-800 font-medium text-lg">
                Letter case is the distinction between the letters that are in
                larger uppercase or capitals (or more formally majuscule) and
                smaller lowercase (or more formally minuscule) in the written
                representation of certain languages. The writing systems that
                distinguish between the upper and lowercase have two parallel
                sets of letters, with each letter in one set usually having an
                equivalent in the other set. The two case variants are
                alternative representations of the same letter: they have the
                same name and pronunciation and are treated identically when
                sorting in alphabetical order.
              </p>
              <p class="font-qs text-gray-800 font-medium text-lg">
                Letter case is generally applied in a mixed-case fashion, with
                both upper and lowercase letters appearing in a given piece of
                text for legibility. The choice of case is often prescribed by
                the grammar of a language or by the conventions of a particular
                discipline. In orthography, the uppercase is primarily reserved
                for special purposes, such as the first letter of a sentence or
                of a proper noun (called capitalisation, or capitalised words),
                which makes the lowercase the more common variant in regular
                text.
              </p>
              <p class="font-qs text-gray-800 font-medium text-lg">
                In some contexts, it is conventional to use one case only, for
                example, engineering design drawings are typically labelled
                entirely in uppercase letters, which are easier to distinguish
                individually than the lowercase when space restrictions require
                that the lettering be very small. In mathematics, on the other
                hand, letter case may indicate the relationship between
                mathematical objects, with uppercase letters often representing
                “superior” objects (e.g., X could be a mathematical set
                containing the generic member x).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'About',
})
</script>
