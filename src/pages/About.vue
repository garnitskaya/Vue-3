<script setup>
import GroupItem from "@/components/GroupItem.vue";
import HistoryItem from "@/components/HistoryItem.vue";

const items = [
  {
    id: 1,
    name: "Тарас Тополя",
    position: "Вокал, текст",
    text: "Lorem ipsum dolor sit amet, sit probatus quaerendum ei, ius sale noluisse partiendo ad, cibo accumsan sit ea. Oratio lucilius ex qui, ex possit similique gloriatur eum. Illum elitr laboramus no sea, oratio viderer qui an. Veniam invidunt ea has, ea. Sed lorem sensibus referrentur ut, consectetuer cu mel.",
  },
  {
    id: 2,
    name: "Сергій Вусик",
    position: "Клавішні, аранжування",
    text: "Lorem ipsum dolor sit amet, sit probatus quaerendum ei, ius sale noluisse partiendo ad, cibo accumsan sit ea. Oratio lucilius ex qui, ex possit similique gloriatur eum. Illum elitr laboramus no sea, oratio viderer qui an. Veniam invidunt ea has, ea. Sed lorem sensibus referrentur ut, consectetuer cu mel.",
  },
  {
    id: 3,
    name: "Дмитро Водовозов",
    position: "Ударні",
    text: "Lorem ipsum dolor sit amet, sit probatus quaerendum ei, ius sale noluisse partiendo ad, cibo accumsan sit ea. Oratio lucilius ex qui, ex possit similique gloriatur eum. Illum elitr laboramus no sea, oratio viderer qui an. Veniam invidunt ea has, ea. Sed lorem sensibus referrentur ut, consectetuer cu mel.",
  },
  {
    id: 4,
    name: "Дмитро Жолудь",
    position: "Гітара",
    text: "Lorem ipsum dolor sit amet, sit probatus quaerendum ei, ius sale noluisse partiendo ad, cibo accumsan sit ea. Oratio lucilius ex qui, ex possit similique gloriatur eum. Illum elitr laboramus no sea, oratio viderer qui an. Veniam invidunt ea has, ea. Sed lorem sensibus referrentur ut, consectetuer cu mel.",
  },
  {
    id: 5,
    name: "Михайло Чирко",
    position: "Бас",
    text: "Lorem ipsum dolor sit amet, sit probatus quaerendum ei, ius sale noluisse partiendo ad, cibo accumsan sit ea. Oratio lucilius ex qui, ex possit similique gloriatur eum. Illum elitr laboramus no sea, oratio viderer qui an. Veniam invidunt ea has, ea. Sed lorem sensibus referrentur ut, consectetuer cu mel.",
  },
];

const historyItems = [
  {
    data: "2004",
    items: {
      name: "Назва",
      text: "Влітку 2004-го Тарас Тополя в колективі з друзями на випускному вечорі виконує власну однойменну пісню «Антитіла». У ній йдеться про протилежності, що дуже різняться, але не можуть бути один без одного. Назва пісні стане в майбутньому назвою музичної групи, а зміст, закладений у це слово, поглибиться до філософського.",
    },
  },
  {
    data: "2005 - 2006",
    items: [
      {
        name: "Освіта і мрії",
        text: "Тарас Тополя, народився  21.06.1987 у Київі на Подолі в родині вчителя і міліціонера. У 6 років пішов до музичної школи на клас скрипки та займався аж до вступу до університету. Навчався у 48-й гімназії міста Києва, в цей період грав в струнному ансамблі, співав у хорі при чоловічій хоровій капелі ім. Ревуцького. Хор порівнювали з Віденським хором хлопчиків. Одного разу у складі хору співав Іоану Павлу Другому у Ватикані. У старших класах зібрав першу музичну групу.Спочатку репетиції проводили у підвалі школи, пізніше орендували репетиційну базу.Згодом музичний колектив став його основним заняттям.Оволодів грою на гітарі.Закінчив університет внутрішніх справ за спеціальністю правознавство.Як і більшість майбутніх учасників гурту мріє про велику сцену і навіть не підозрює, що у недалекому 2007-му зберуться в міцну рок- банду з неймовірно цікавим життям! ",
      },
    ],
  },
  {
    data: "2007",
    items: [
      {
        name: "Перший «Шанс»",
        text: "Влітку 2004-го Тарас Тополя в колективі з друзями на випускному вечорі виконує власну однойменну пісню «Антитіла». У ній йдеться про протилежності, що дуже різняться, але не можуть бути один без одного. Назва пісні стане в майбутньому назвою музичної групи, а зміст, закладений у це слово, поглибиться до філософського.",
      },
      {
        name: "Перший тур",
        text: "Компанія «Спека Мьюзік» запрошує АНТИТІЛА у open-air тур містами України. На майданах Києва, Чернігова, Умані, Сум,  Черкас підспівували Антитілам ті, хто стали свідками дебюту гурту на великій сцені. ",
      },
    ],
  },
];
</script>

<template>
  <wrapper-page>
    <div class="about">
      <container title="Склад гурту">
        <div class="about__group-blocks">
          <group-item v-for="item in items" :key="item.id" :item="item" />
        </div>
      </container>

      <container title="Історія гурту">
        <div class="about__history-blocks">
          <history-item
            v-for="(item, i) in historyItems"
            :key="i"
            :item="item"
          />
        </div>
      </container>
    </div>
  </wrapper-page>
</template>

<style lang="scss" scoped>
.about {
  position: relative;
  padding: 48px 0;

  display: flex;
  flex-direction: column;
  gap: 48px;
  &__group-blocks {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__history-blocks {
    margin-left: 10px;
    min-width: 1176px;
    width: 100%;
    position: relative;
    border-left: 1px solid var(--grey);
  }
}
</style>