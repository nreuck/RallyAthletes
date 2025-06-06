
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Briefcase, MapPin, CalendarDays, ArrowRight, Send, Lightbulb, Search as SearchIcon, X as ClearIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { companyBenefits, openPositions, type JobPosition } from '@/lib/careersData';
import React, { useState, useMemo, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const ALL_DEPARTMENTS_ITEM_VALUE = "__ALL_DEPARTMENTS__";
const ALL_LOCATIONS_ITEM_VALUE = "__ALL_LOCATIONS__";
const ALL_TYPES_ITEM_VALUE = "__ALL_TYPES__";

function JobPositionCard({ position }: { position: JobPosition }) {
  const [formattedDate, setFormattedDate] = useState<string | null>(null);

  useEffect(() => {
    // Perform date formatting only on the client side after hydration
    setFormattedDate(
      new Date(position.postedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    );
  }, [position.postedDate]);

  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="font-headline text-xl">{position.title}</CardTitle>
        <CardDescription className="text-sm text-primary">{position.department}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-2 shrink-0" />
          {position.location}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Briefcase className="h-4 w-4 mr-2 shrink-0" />
          <Badge variant="secondary" className="mr-2">{position.type}</Badge>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4 mr-2 shrink-0" />
          {formattedDate ? `Posted: ${formattedDate}` : 'Loading date...'}
        </div>
        <p className="text-muted-foreground text-sm line-clamp-3">{position.summary}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href={position.applyLink}>
            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function CareersPageClient() {
  const allPositions = useMemo(() => 
    [...openPositions].sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()), 
    []
  );

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const departments = useMemo(() => Array.from(new Set(allPositions.map(p => p.department))), [allPositions]);
  const locations = useMemo(() => Array.from(new Set(allPositions.map(p => p.location))), [allPositions]);
  const types = useMemo(() => Array.from(new Set(allPositions.map(p => p.type))), [allPositions]);

  const filteredPositions = useMemo(() => {
    return allPositions.filter(position => {
      const matchesSearchTerm =
        searchTerm.trim() === '' ||
        position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        position.summary.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDepartment =
        selectedDepartment === '' || position.department === selectedDepartment;

      const matchesLocation =
        selectedLocation === '' || position.location === selectedLocation;

      const matchesType =
        selectedType === '' || position.type === selectedType;

      return matchesSearchTerm && matchesDepartment && matchesLocation && matchesType;
    });
  }, [allPositions, searchTerm, selectedDepartment, selectedLocation, selectedType]);

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedDepartment('');
    setSelectedLocation('');
    setSelectedType('');
  };
  
  const areFiltersActive = searchTerm || selectedDepartment || selectedLocation || selectedType;

  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <header className="text-center mb-12 md:mb-16">
          <Briefcase className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Join Our Team</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            At Rally Athletes, we're passionate about innovation and driven to empower the sports world. We're looking for talented individuals to help us build the future.
          </p>
        </header>

        <section id="why-join-us" className="mb-12 md:mb-20">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-10">Why Work With Rally Athletes?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyBenefits.map((benefit) => (
              <Card key={benefit.title} className="text-center hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
                    <benefit.icon className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <section id="open-positions" className="mb-12 md:mb-20">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-10">Current Openings</h2>

          {allPositions.length > 0 && (
            <div className="mb-8 p-6 border rounded-lg shadow-sm bg-card">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                <div>
                  <Label htmlFor="search-term" className="block text-sm font-medium text-muted-foreground mb-1">Search by keyword</Label>
                  <div className="relative">
                    <Input
                      id="search-term"
                      type="text"
                      placeholder="e.g., Engineer, Product"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="department-filter" className="block text-sm font-medium text-muted-foreground mb-1">Department</Label>
                  <Select 
                    value={selectedDepartment} 
                    onValueChange={(value) => setSelectedDepartment(value === ALL_DEPARTMENTS_ITEM_VALUE ? "" : value)}
                  >
                    <SelectTrigger id="department-filter">
                      <SelectValue placeholder="Filter by Department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={ALL_DEPARTMENTS_ITEM_VALUE}>All Departments</SelectItem>
                      {departments.map(dept => <SelectItem key={dept} value={dept}>{dept}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="location-filter" className="block text-sm font-medium text-muted-foreground mb-1">Location</Label>
                  <Select 
                    value={selectedLocation} 
                    onValueChange={(value) => setSelectedLocation(value === ALL_LOCATIONS_ITEM_VALUE ? "" : value)}
                  >
                    <SelectTrigger id="location-filter">
                      <SelectValue placeholder="Filter by Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={ALL_LOCATIONS_ITEM_VALUE}>All Locations</SelectItem>
                      {locations.map(loc => <SelectItem key={loc} value={loc}>{loc}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="type-filter" className="block text-sm font-medium text-muted-foreground mb-1">Job Type</Label>
                  <Select 
                    value={selectedType} 
                    onValueChange={(value) => setSelectedType(value === ALL_TYPES_ITEM_VALUE ? "" : value)}
                  >
                    <SelectTrigger id="type-filter">
                      <SelectValue placeholder="Filter by Job Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={ALL_TYPES_ITEM_VALUE}>All Types</SelectItem>
                      {types.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {areFiltersActive && (
                <div className="mt-4 flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        Showing {filteredPositions.length} of {allPositions.length} job{allPositions.length === 1 ? "" : "s"}
                    </p>
                    <Button variant="ghost" onClick={handleClearFilters} className="text-sm text-primary hover:text-accent">
                        <ClearIcon className="mr-2 h-4 w-4" />
                        Clear Filters
                    </Button>
                </div>
              )}
            </div>
          )}

          {filteredPositions.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPositions.map((position) => (
                <JobPositionCard key={position.id} position={position} />
              ))}
            </div>
          ) : allPositions.length > 0 ? (
             <div className="text-center py-10">
                <SearchIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-xl text-muted-foreground mb-2">No positions match your criteria.</p>
                <p className="text-md text-muted-foreground">Try adjusting your search or filters.</p>
             </div>
          ) : (
            <div className="text-center py-10">
              <Lightbulb className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl text-muted-foreground mb-4">No open positions at the moment.</p>
              <p className="text-md text-muted-foreground max-w-lg mx-auto mb-6">
                We're always on the lookout for exceptional talent. If you believe your skills could benefit Rally Athletes, we'd love to hear from you!
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="mailto:careers@rallyathletes.com?subject=Speculative%20Application">
                  Send Us Your Resume <Send className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          )}
        </section>

        <section className="py-12 md:py-16 bg-secondary rounded-lg shadow-lg">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="relative h-64 md:h-80 w-full max-w-3xl mx-auto mb-8 rounded-lg overflow-hidden shadow-xl">
                <Image
                    src="https://placehold.co/800x400.png"
                    alt="Diverse team collaborating at Rally Athletes"
                    data-ai-hint="team collaboration office"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Be Part of Something Bigger</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
              We believe in fostering a culture of innovation, collaboration, and growth. Join Rally Athletes and make a real impact on the future of sports technology.
            </p>
             <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/about">
                Learn More About Our Mission <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

      </div>
    </div>
  );
}
