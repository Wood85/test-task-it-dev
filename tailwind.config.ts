import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
			fontFamily: {
        inter: ["var(--font-inter)"],
      },
			fontSize: {
				'2xl': '1.75rem',
			},
			backgroundImage: {
        'search-image': "url('/src/assets/images/search.svg')",
      },
  		colors: {
				'gray': '#7C96B1',
				'light-blue': '#DAE6F2',
				'dark-blue': '#204973',
				'blue': '#3758AB',
				'dark': '#1C3144',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
			maxWidth: {
        '8xl': '90rem',
				'37.5': '9.375rem',
				'99': '24.75rem',
      },
			maxHeight: {
				'37.5': '9.375rem',
      },
			spacing: {
				'9.5': '2.375rem',
        '21.5': '5.375rem',
      },
			width: {
				'22.5': '5.625rem',
				'37.5': '9.375rem',
        '130.75': '32.7rem',
      },
			padding: {
        '19px': '19px',
      },
			height: {
        '37.5': '9.375rem',
				'45': '11.25rem',
				'46': '11.5rem',
				'50': '12.5rem',
      },
			inset: {
        '20px': '-20px',
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
