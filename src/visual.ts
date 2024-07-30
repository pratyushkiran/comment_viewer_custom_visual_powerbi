// /*
//  *  Power BI Visual CLI
//  *
//  *  Copyright (c) Microsoft Corporation
//  *  All rights reserved.
//  *  MIT License
//  *
//  *  Permission is hereby granted, free of charge, to any person obtaining a copy
//  *  of this software and associated documentation files (the ""Software""), to deal
//  *  in the Software without restriction, including without limitation the rights
//  *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//  *  copies of the Software, and to permit persons to whom the Software is
//  *  furnished to do so, subject to the following conditions:
//  *
//  *  The above copyright notice and this permission notice shall be included in
//  *  all copies or substantial portions of the Software.
//  *
//  *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//  *  THE SOFTWARE.
//  */
// // "use strict";

// // import "./../style/visual.less";
// // import powerbi from "powerbi-visuals-api";
// // import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
// // import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
// // import IVisual = powerbi.extensibility.visual.IVisual;
// // import DataView = powerbi.DataView;
// // import IVisualHost = powerbi.extensibility.IVisualHost;
// // import * as d3 from "d3";
// // type Selection<T extends d3.BaseType> = d3.Selection<T, any, any, any>;

// // interface Review {
// //   imageUrl: string;
// //   name: string;
// //   review: string;
// //   rating: number;
// // }

// // export class Visual implements IVisual {
// //   private host: IVisualHost;
// //   private svg: Selection<SVGElement>;
// //   private container: Selection<SVGElement>;
// //   private image: Selection<SVGElement>;
// //   private textName: Selection<SVGElement>;
// //   private textReview: Selection<SVGElement>;
// //   private textRating: Selection<SVGElement>;
// //   private reviews: Review[] = [];
// //   private currentIndex: number = 0;

// //   constructor(options: VisualConstructorOptions) {
// //     this.host = options.host;
// //     this.svg = d3
// //       .select(options.element)
// //       .append("svg")
// //       .classed("reviewViewer", true);

// //     this.container = this.svg.append("g").classed("container", true);

// //     this.image = this.container.append("image").classed("reviewImage", true);

// //     this.textName = this.container.append("text").classed("reviewName", true);

// //     this.textReview = this.container.append("text").classed("reviewText", true);

// //     this.textRating = this.container
// //       .append("text")
// //       .classed("reviewRating", true);

// //     setInterval(() => this.updateReview(), 5000);
// //   }

// //   public update(options: VisualUpdateOptions) {
// //     let width: number = options.viewport.width;
// //     let height: number = options.viewport.height;

// //     this.svg.attr("width", width);
// //     this.svg.attr("height", height);

// //     this.container.attr("transform", `translate(${width / 2}, ${height / 2})`);

// //     // Extract the data
// //     this.reviews = [];
// //     const dataView: DataView = options.dataViews[0];
// //     if (dataView && dataView.table && dataView.table.rows) {
// //       dataView.table.rows.forEach((row) => {
// //         this.reviews.push({
// //           imageUrl: row[0] as string,
// //           name: row[1] as string,
// //           review: row[2] as string,
// //           rating: row[3] as number,
// //         });
// //       });
// //     }

// //     // Initial display
// //     this.updateReview();
// //   }

// //   private updateReview() {
// //     if (this.reviews.length === 0) return;

// //     const review = this.reviews[this.currentIndex];
// //     this.image
// //       .attr("xlink:href", review.imageUrl)
// //       .attr("x", -100)
// //       .attr("y", -150)
// //       .attr("width", 200)
// //       .attr("height", 200);

// //     this.textName
// //       .text(review.name)
// //       .attr("x", 0)
// //       .attr("y", 70)
// //       .attr("text-anchor", "middle")
// //       .style("font-size", "24px");

// //     this.textReview
// //       .text(review.review)
// //       .attr("x", 0)
// //       .attr("y", 100)
// //       .attr("text-anchor", "middle")
// //       .style("font-size", "16px")
// //       .call(this.wrapText, 200);

// //     this.textRating
// //       .text(`Rating: ${review.rating}`)
// //       .attr("x", 0)
// //       .attr("y", 130)
// //       .attr("text-anchor", "middle")
// //       .style("font-size", "20px");

// //     this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
// //   }

// //   private wrapText(text, width) {
// //     text.each(function () {
// //       var text = d3.select(this),
// //         words = text.text().split(/\s+/).reverse(),
// //         word,
// //         line = [],
// //         lineNumber = 0,
// //         lineHeight = 1.1, // ems
// //         y = text.attr("y"),
// //         dy = parseFloat(text.attr("dy") || "0"),
// //         tspan = text
// //           .text(null)
// //           .append("tspan")
// //           .attr("x", 0)
// //           .attr("y", y)
// //           .attr("dy", dy + "em");
// //       while ((word = words.pop())) {
// //         line.push(word);
// //         tspan.text(line.join(" "));
// //         if (tspan.node().getComputedTextLength() > width) {
// //           line.pop();
// //           tspan.text(line.join(" "));
// //           line = [word];
// //           tspan = text
// //             .append("tspan")
// //             .attr("x", 0)
// //             .attr("y", y)
// //             .attr("dy", ++lineNumber * lineHeight + dy + "em")
// //             .text(word);
// //         }
// //       }
// //     });
// //   }
// // }

// // old capapbilities.json
// // {
// //     "dataRoles": [
// //       {
// //         "displayName": "Measure",
// //         "name": "measure",
// //         "kind": "Measure"
// //       }
// //     ],
// //     "dataViewMappings": [
// //       {
// //         "conditions": [{ "measure": { "max": 1 } }],
// //         "single": {
// //           "role": "measure"
// //         }
// //       }
// //     ],
// //     "privileges": []
// //   }

// // //
// // "use strict";

// // import "./../style/visual.less";
// // import powerbi from "powerbi-visuals-api";
// // import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
// // import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
// // import IVisual = powerbi.extensibility.visual.IVisual;
// // import DataView = powerbi.DataView;
// // import IVisualHost = powerbi.extensibility.IVisualHost;
// // import * as d3 from "d3";
// // type Selection<T extends d3.BaseType> = d3.Selection<T, any, any, any>;

// // export class Visual implements IVisual {
// //   private host: IVisualHost;
// //   private svg: Selection<SVGElement>;
// //   private container: Selection<SVGElement>;
// //   private image: Selection<SVGImageElement>;
// //   private name: Selection<SVGTextElement>;
// //   private reviewContainer: Selection<SVGForeignObjectElement>;
// //   private rating: Selection<SVGTextElement>;
// //   private data: any[];
// //   private currentIndex: number = 0;

// //   constructor(options: VisualConstructorOptions) {
// //     this.svg = d3
// //       .select(options.element)
// //       .append("svg")
// //       .classed("customVisual", true);
// //     this.container = this.svg.append("g").classed("container", true);

// //     this.image = this.container.append("image").classed("image", true);

// //     this.name = this.container.append("text").classed("name", true);

// //     this.reviewContainer = this.container
// //       .append("foreignObject")
// //       .classed("reviewContainer", true);

// //     this.rating = this.container.append("text").classed("rating", true);
// //   }

// //   public update(options: VisualUpdateOptions) {
// //     const dataView = options.dataViews[0];
// //     if (!dataView || !dataView.table) {
// //       return;
// //     }

// //     // Extract data
// //     this.data = dataView.table.rows.map((row) => ({
// //       imageUrl: row[0] as string,
// //       name: row[1] as string,
// //       review: row[2] as string,
// //       rating: row[3] as string,
// //     }));

// //     this.render();
// //   }

// //   private render() {
// //     if (this.data.length === 0) {
// //       return;
// //     }

// //     const item = this.data[this.currentIndex];

// //     this.image
// //       .attr("href", item.imageUrl)
// //       .attr("x", 10)
// //       .attr("y", 10)
// //       .attr("width", 100)
// //       .attr("height", 100);

// //     this.name
// //       .text(item.name)
// //       .attr("x", 120)
// //       .attr("y", 30)
// //       .style("font-size", "14px");

// //     this.reviewContainer
// //       .attr("x", 120)
// //       .attr("y", 50)
// //       .attr("width", 200)
// //       .attr("height", 100) // Height for review container
// //       .html(`<div class="review-text">${item.review}</div>`);

// //     this.rating
// //       .text(`Rating: ${item.rating}`)
// //       .attr("x", 120)
// //       .attr("y", 160)
// //       .style("font-size", "12px");

// //     // Set up a simple interval to cycle through data (5 seconds for demo)
// //     this.currentIndex = (this.currentIndex + 1) % this.data.length;
// //     setTimeout(() => this.render(), 5000);
// //   }
// // }

// "use strict";

// import "./../style/visual.less";
// import powerbi from "powerbi-visuals-api";
// import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
// import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
// import IVisual = powerbi.extensibility.visual.IVisual;
// import DataView = powerbi.DataView;
// import IVisualHost = powerbi.extensibility.IVisualHost;
// import * as d3 from "d3";
// type Selection<T extends d3.BaseType> = d3.Selection<T, any, any, any>;

// export class Visual implements IVisual {
//   private host: IVisualHost;
//   private svg: Selection<SVGElement>;
//   private container: Selection<SVGElement>;
//   private image: Selection<SVGImageElement>;
//   private name: Selection<SVGTextElement>;
//   private reviewContainer: Selection<SVGForeignObjectElement>;
//   private rating: Selection<SVGTextElement>;
//   private data: any[];
//   private currentIndex: number = 0;

//   constructor(options: VisualConstructorOptions) {
//     this.svg = d3
//       .select(options.element)
//       .append("svg")
//       .classed("customVisual", true);
//     this.container = this.svg.append("g").classed("container", true);

//     this.image = this.container.append("image").classed("image", true);

//     this.name = this.container.append("text").classed("name", true);

//     this.reviewContainer = this.container
//       .append("foreignObject")
//       .classed("reviewContainer", true);

//     this.rating = this.container.append("text").classed("rating", true);
//   }

//   public update(options: VisualUpdateOptions) {
//     const dataView = options.dataViews[0];
//     if (!dataView || !dataView.table) {
//       return;
//     }

//     // Extract data
//     this.data = dataView.table.rows.map((row) => ({
//       imageUrl: row[0] as string,
//       name: row[1] as string,
//       review: row[2] as string,
//       rating: row[3] as string,
//     }));

//     this.render();
//   }

//   private render() {
//     if (this.data.length === 0) {
//       return;
//     }

//     const item = this.data[this.currentIndex];

//     this.image
//       .attr("href", item.imageUrl)
//       .attr("x", 10)
//       .attr("y", 10)
//       .attr("width", 100)
//       .attr("height", 100);

//     this.name
//       .text(item.name)
//       .attr("x", 120)
//       .attr("y", 30)
//       .style("font-size", "14px");

//     this.reviewContainer
//       .attr("x", 120)
//       .attr("y", 50)
//       .attr("width", 200)
//       .attr("height", 100) // Height for review container
//       .html(`<div class="review-text">${item.review}</div>`);

//     this.rating
//       .text(`Rating: ${item.rating}`)
//       .attr("x", 120)
//       .attr("y", 160)
//       .style("font-size", "12px");

//     // Set up a simple interval to cycle through data (5 seconds for demo)
//     this.currentIndex = (this.currentIndex + 1) % this.data.length;
//     setTimeout(() => this.render(), 3000);
//   }
// }

"use strict";

import "./../style/visual.less";
import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import DataView = powerbi.DataView;
import IVisualHost = powerbi.extensibility.IVisualHost;
import * as d3 from "d3";
type Selection<T extends d3.BaseType> = d3.Selection<T, any, any, any>;

export class Visual implements IVisual {
  private host: IVisualHost;
  private svg: Selection<SVGElement>;
  private container: Selection<SVGElement>;
  private image: Selection<SVGImageElement>;
  private name: Selection<SVGTextElement>;
  private reviewContainer: Selection<SVGForeignObjectElement>;
  private rating: Selection<SVGTextElement>;
  private data: any[] = [];
  private previousData: any[] = [];
  private currentIndex: number = 0;
  private interval: number;

  constructor(options: VisualConstructorOptions) {
    this.svg = d3
      .select(options.element)
      .append("div")
      .classed("customVisual", true);

    // <div class="container">
    this.container = this.svg.append("div").classed("container", true);

    this.image = this.container
      .append("img")
      //   .attr("x", "50%")
      //   .attr("y", "50%")
      //   .attr("transform", "translate(-50%, -50%)")
      .classed("image", true);

    this.name = this.container
      .append("h4")
      //   .attr("x", "75%")
      //   .attr("y", "90%")
      //   .attr("text-anchor", "middle")
      .classed("name", true);

    this.reviewContainer = this.svg
      .append("div")
      .classed("reviewContainer", true);

    // this.reviewContainer = this.container
    //   .append("foreignObject")
    //   .classed("reviewContainer", true);
    this.rating = this.container.append("text").classed("rating", true);

    // Initialize interval but do not start yet
    this.interval = window.setInterval(() => this.updateReview(), 1000); // for time interval in seconds
  }

  public update(options: VisualUpdateOptions) {
    const dataView = options.dataViews[0];
    if (!dataView || !dataView.table) {
      return;
    }

    // Extract new data
    const newData = dataView.table.rows.map((row) => ({
      imageUrl: row[0] as string,
      name: row[1] as string,
      review: row[2] as string,
      rating: row[3] as string,
    }));

    // Only update if data has changed
    if (!this.isDataEqual(newData, this.previousData)) {
      this.data = newData;
      this.previousData = [...newData];
      this.currentIndex = 0; // Reset index when data changes
      this.render();
    }
  }

  private render() {
    if (this.data.length === 0) {
      return;
    }

    const item = this.data[this.currentIndex];

    this.image
      .attr("src", item.imageUrl)
      .attr("width", 100)
      .attr("height", 100);

    this.name.text(item.name);

    this.reviewContainer
      .attr("x", 120)
      .attr("y", 50)
      .attr("width", 200)
      .attr("height", 100)
      .html(`<div class="review-text">${item.review}</div>`);

    this.rating
      .text(`Rating: ${item.rating}`)
      .attr("x", 120)
      .attr("y", 160)
      .style("font-size", "12px");

    // Set up a simple interval to cycle through data
    this.currentIndex = (this.currentIndex + 1) % this.data.length;
  }

  private updateReview() {
    this.render();
  }

  private isDataEqual(newData: any[], oldData: any[]): boolean {
    if (newData.length !== oldData.length) {
      return false;
    }
    for (let i = 0; i < newData.length; i++) {
      if (JSON.stringify(newData[i]) !== JSON.stringify(oldData[i])) {
        return false;
      }
    }
    return true;
  }
}
