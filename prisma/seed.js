/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.unit.deleteMany();
  await prisma.development.deleteMany();

  const venus = await prisma.development.create({
    data: {
      slug: "venus-kileleshwa",
      name: "Venus Residences",
      location: "Kileleshwa",
      region: "Nairobi",
      status: "Just Launched",
      startingPrice: 23000000,
      currency: "KES",
      bedsSummary: "3-4 Bedroom",
      featuredImage:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
      description:
        "Venus Residences is a boutique collection of duplex apartments designed for modern Nairobi living.",
      units: {
        create: [
          {
            slug: "venus-4br-duplex",
            title: "4 Bedroom Duplex with Garden",
            propertyType: "Duplex",
            bedrooms: 4,
            bathrooms: 4,
            isEnsuite: true,
            sizeSqm: 265,
            floorNumber: 2,
            price: 32500000,
            currency: "KES",
            availabilityStatus: "Available",
            description:
              "Double-volume living spaces, private garden terrace, German kitchen, and ensuite bedrooms with generous storage.",
          },
          {
            slug: "venus-3br-loft",
            title: "3 Bedroom Loft",
            propertyType: "Apartment",
            bedrooms: 3,
            bathrooms: 3,
            isEnsuite: true,
            sizeSqm: 198,
            floorNumber: 5,
            price: 24500000,
            currency: "KES",
            availabilityStatus: "Reserved",
            description:
              "Sun-drenched loft with double-height windows, open-plan living, and ensuite bedrooms for modern families.",
          },
        ],
      },
    },
  });

  const aurora = await prisma.development.create({
    data: {
      slug: "aurora-riverside",
      name: "Aurora Riverside",
      location: "Riverside",
      region: "Nairobi",
      status: "Construction Ongoing",
      startingPrice: 18500000,
      currency: "KES",
      bedsSummary: "2-3 Bedroom",
      featuredImage:
        "https://images.unsplash.com/photo-1505691938895-1f4e30bca8f4?auto=format&fit=crop&w=1600&q=80",
      description:
        "Aurora Riverside blends indoor-outdoor living with expansive balconies, soft neutral finishes, and refined detailing.",
      units: {
        create: [
          {
            slug: "aurora-3br",
            title: "3 Bedroom River View",
            propertyType: "Apartment",
            bedrooms: 3,
            bathrooms: 3,
            isEnsuite: true,
            sizeSqm: 210,
            floorNumber: 9,
            price: 21500000,
            currency: "KES",
            availabilityStatus: "Available",
            description:
              "Corner unit with wraparound balcony, panoramic river views, and premium kitchen finishes.",
          },
          {
            slug: "aurora-2br",
            title: "2 Bedroom Haven",
            propertyType: "Apartment",
            bedrooms: 2,
            bathrooms: 2,
            isEnsuite: true,
            sizeSqm: 138,
            floorNumber: 6,
            price: 18500000,
            currency: "KES",
            availabilityStatus: "Sold",
            description:
              "Bright open-plan living with full-height windows and tranquil river-facing balcony.",
          },
        ],
      },
    },
  });

  console.log("Seeded developments:", venus.slug, aurora.slug);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
